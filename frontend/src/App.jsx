import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CreatePostPage from "./pages/CreateListing";
import PostDetails from "./components/PostDetails";
import Profile from "./components/Profile";

function App() {
  return (
    <main>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/create"} element={<CreatePostPage />}>
            <Route path="item" element={<CreatePostPage />} />
            <Route path="service" element={<CreatePostPage />} />
            <Route path="vehicle" element={<CreatePostPage />} />
            <Route path="rental" element={<CreatePostPage />} />
          </Route>
          <Route path={"/post/:id"} element={<PostDetails />} />
          <Route path={"/profile"} element={<Profile />} />
         </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
