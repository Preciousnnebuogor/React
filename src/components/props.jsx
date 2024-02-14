export default function ArrayProps({blogs,tithe,handleDelete}) {
//   const blogs = props.list;
//   const title = props.tithe;

  return (
    <div>
      <h1>{tithe}</h1>
      {blogs.map((blog) => (
        <div className="blogslite" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.author}</p>
          <h2>{blog.body}</h2>
          <h3>{blog.id}</h3>
          <button onClick={() => {handleDelete(blog.id)}}>delete blog</button>
        </div>
      ))}
    </div>
  );
}
