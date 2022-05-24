import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/Blogs/` + id);
  const handleDelete = () => {
    fetch(`http://localhost:8000/Blogs/` + blogs.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && (
        <div>
          <h2>Loading.....</h2>
        </div>
      )}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h2 style={{ color: "#f1356d", marginBottom: "5px" }}>
            {blogs.title}
          </h2>
          <p
            style={{
              fontSize: "14px",
              textAlign: "justify",
              marginBottom: "5px",
            }}
          >
            {blogs.body}
          </p>
          <p
            style={{
              color: "blue",
              fontSize: "12px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            - {blogs.author}
          </p>
          <button
            style={{
              backgroundColor: "#f1356d",
              padding: "8px 16px",
              color: "#fff",
              border: "0",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
