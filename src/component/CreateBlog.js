import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Tusher");
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setPending(true);
    fetch(`http://localhost:8000/Blogs/`, {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      alert("Blog sucessFully added !!");
      setPending(false);
    });

    navigate("/");
  };
  return (
    <div className="create">
      <h4>Create Blog</h4>
      <form onSubmit={handleSubmit}>
        <label>Blog Title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body :</label>
        <textarea
          value={body}
          rows="8"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Tusher">Tusher</option>
          <option value="Ahmed">Ahmed</option>
          <option value="Joy">Joy</option>
        </select>
        {!pending && <button>Add Blog</button>}
        {pending && <button>Adding Blog....</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
