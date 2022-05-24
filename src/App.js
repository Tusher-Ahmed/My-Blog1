import Navbar from "./component/Navbar.js";
import Home from "./component/Home.js";
import CreateBlog from "./component/CreateBlog.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetails from "./component/BlogDetails.js";
import NotFound from "./component/NotFound.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/create" element={<CreateBlog />}></Route>
            <Route path="/blog/:id" element={<BlogDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
