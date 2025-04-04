import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CreatePostPage from "./components/CreatePost";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <main>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/create"} element={<CreatePostPage />} />
          <Route path={"/post/:id"} element={<PostDetails/>}/>
         </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
