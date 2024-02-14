import { useState } from "react";
export default function Practice() {
  const [blogs, setBlogs] = useState([
    {
      title: "i love you",
      body: "remember our relationship",
      author: "mario",
      id: "1",
    },
    {
      title: "i like me",
      body: "develop our company policy",
      author: "mario",
      id: "2",
    },
  ]);

  return <div>
{blogs.map((blog) => (
       <div className="blogslite" key={blog.id}>
        <h1>{blog.title}</h1>
        <p>{blog.author}</p>
        <h2>{blog.body}</h2>
        <h3>{blog.id}</h3>
       </div> 
     ))}
  </div>
}






