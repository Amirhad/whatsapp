import Link from "@/node_modules/next/link";
import React from "react";
import './Post.scss'

async function getPost() {
  const res = await fetch(`http://localhost:3000/api/hello`);

  return await res.json();
}

type Props = {
  params: {
    id: string;
  };
};

export default async function Post({ params: { id } }: Props) {
  const blog = await getPost();
  const data = blog.find((elem: { id: number }) => elem.id === parseInt(id));
  return (
    <div className="Post_container">
      <div className="post_header">
        <div className="post_header_title">
          <h2>
            <Link href={'/'}>
            {data.title}
            </Link>
          </h2>
        </div>

      </div>

        <div className="post">
        <p>{data.blogs_text}</p>

        </div>
    </div>
  );
}
