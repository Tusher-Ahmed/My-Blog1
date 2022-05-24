import BlogList from "./Blog_List";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    pending,
    error,
  } = useFetch(`http://localhost:8000/Blogs`);
  return (
    <div className="home">
      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      )}
      {pending && (
        <div>
          <h1>Loading.....</h1>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Tusher")}
        title="Tusher's Blogs!"handleDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Home;
