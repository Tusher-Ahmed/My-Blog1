import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  //const blogs = props.blogs;
  return (
    <div className="blog_list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p
              style={{
                display: "flex",
                justifyContent: "end",
                fontSize: "12px",
              }}
            >
              Written by {blog.author}
            </p>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
