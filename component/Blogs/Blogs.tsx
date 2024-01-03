import React from "react";
import styles from "../../styles/blogs.module.scss";
import { Blog } from "@/component/Blogs/Blog";
import { Blogs_dataProps } from "@/app/api/hello/Blogs";

async function getData() {
  const res = await fetch("http://localhost:3000/api/hello");

  return await res.json();
}

export const Blogs: React.FC = async () => {
  const blogs = await getData();
  return (
    <div className={styles.container}>
      {blogs.map(
        (item:Blogs_dataProps) => {
        return <Blog item={item} key={item.id} />;
      })}
    </div>
  );
};
