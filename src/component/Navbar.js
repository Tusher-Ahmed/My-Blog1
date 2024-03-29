import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>My Blog</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
