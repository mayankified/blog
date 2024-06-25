import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import dayjs from "dayjs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blog Posts | mayank",
  description: "List of all blog posts public on mayank blog",
};
async function getPosts() {
  const posts = await client.fetch(`*[_type == "post"]{title, slug,icon}`);
  return posts;
}
export const revalidate = 60;


const Posts = ({ data }: any) => {
  // console.log(data);
  let posts = data ? (
    data.map((post: any) => {
      return (
        <Link key={post.slug.current} href={`/blog/${post.slug.current}`}>
          <div className="blog-posts-list-item">
            <Image
              src={post.icon}
              alt="dickbutt image unrelated to the post"
              height={65}
              width={65}
              quality={20}
              className="blog-posts-thumbnail"
            />

            <div className="blog-posts-list-item-title-and-date">
              <h2>{post.title}</h2>
              <div className="blog-posts-list-item-date">
                <span>
                  {dayjs(data[0]?.publishdate).format("MMMM D, YYYY")}
                </span>
              </div>
            </div>
          </div>
        </Link>
      );
    })
  ) : (
    <div className="blog-posts-get-data-error-msg">
      <span>An error occurred while fetching Posts.</span>
    </div>
  );

  return posts;
};

const page = async () => {
  const posts = await getPosts();
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="blog-posts-container">
        <h1>📰 Blog posts</h1>
        <div className="blog-posts-list">
          <Posts data={posts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
