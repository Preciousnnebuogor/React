import { useState } from "react";
import ArrayProps from "./props";


export function MapArrary() {
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
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
  }
  return (
    <div>
      <ArrayProps blogs={blogs} tithe="all define" handleDelete={handleDelete} />
    </div>
  );
}
