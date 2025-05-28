const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./db/db.config");
const postModel = require("./models/post.model");
const multer = require("multer");
const cors = require("cors");
// const postRouter = require("./routes/post.route");
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const crypto = require("crypto");
// const sharp = require("sharp");

const app = express();
app.use(cors());
dotenv.config();

const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const port = process.env.PORT || 4100;

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
  region: bucketRegion,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
});

app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//upload a single image
app.post("/api/v1/posts", upload.single("image"), async (req, res) => {
  //To resize the image
  //   const buffer = await sharp(req.file.buffer)
  //     .resize({ height: 1920, width: 1080, fit: "contain" })
  //     .toBuffer();

  const imageName = randomImageName() + req.file.originalname;

  // information of the file
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };

  const command = new PutObjectCommand(params);

  try {
    await s3.send(command);

    const newPost = await postModel({
      caption: req.body.caption,
      imageName: imageName,
    });

    await newPost.save();

    res.send(newPost);
  } catch (error) {
    console.log("New Post Error", error);
  }
});

app.get("/api/v1/posts", async (req, res) => {
  // const posts = await postModel.find({ orderBy: [{ created: "desc" }] });
  const fetchedPosts = await postModel.find({}).sort({ created: -1 });

  const posts = await Promise.all(
    fetchedPosts.map(async (post) => {
      let newPost = {};
      const getObjectParams = {
        Bucket: bucketName,
        Key: post.imageName,
      };
      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
      newPost = {
        ...post._doc,
        url,
      };
      return newPost;
    })
  );

  res.send(posts);
});

//Get a single post.
app.get("/api/v1/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postModel.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const getObjectParams = {
      Bucket: bucketName,
      Key: post.imageName,
    };

    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

    const newPost = {
      ...post._doc,
      url,
    };
    res.send(newPost);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/api/v1/posts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await postModel.findById({ _id: id });
    if (!post) {
      res.status(404).send("Post not found");
      return;
    }

    const params = {
      Bucket: bucketName,
      Key: post.imageName,
    };

    const command = new DeleteObjectCommand(params);
    await s3.send(command);

    await postModel.findByIdAndDelete(id);

    res.send(post);
  } catch (error) {
    console.log(error);
  }
});

// app.use("/api/v1/posts/", postRouter);

app.listen(port, () => {
  connectToDB();
  console.log("Server is running on port", port);
});
