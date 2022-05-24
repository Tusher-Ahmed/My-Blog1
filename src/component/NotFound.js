import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404</h1>
      <h4>Sorry!! Page is not found.....</h4>
      <Link to="/">Click here to go to the home page..</Link>
    </div>
  );
};

export default NotFound;
