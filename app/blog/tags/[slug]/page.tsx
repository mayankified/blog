import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import dayjs from "dayjs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
interface Params {
  params: {
    slug: string;
  };
}
export const revalidate = 60;

async function getTagsPost(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && references(*[_type == "tag" && slug.current == "${slug}"]._id)]{title,icon,publishdate,slug}`
  );
  return post;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return {
    title: `Posts tagged as "${params.slug}" | Coding Blog`,
    description: "List of all blog posts public on mayank blog",
    icons: "/favicon-32x32.png",
  };
}
const page = async (params: Params) => {
  const data = await getTagsPost(params.params.slug);
  if (!data) {
    return (
      <div className="layout-wrapper">
        {/* <HeadMetadata
                title={`Posts tagged as "${tag}" | Coding Blog`}
                metaDescription={`All blog posts tagged as "${tag}".`}
            /> */}
        <Navbar />
        <div className="blog-posts-container">
          <h1>
            {" "}
            Blog posts tagged as <u>{params.params.slug}</u>{" "}
          </h1>
          loading...
        </div>
      </div>
    );
  }
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="blog-posts-container">
        <h1>
          {" "}
          Blog posts tagged as <u>{params.params.slug}</u>{" "}
        </h1>
        <div className="blog-posts-list">
          {data ? (
            data.map((post: any) => {
              return (
                <Link
                  key={post.slug.current}
                  href={`/blog/${post.slug.current}`}
                >
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
              <span>An error occurred.</span>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
