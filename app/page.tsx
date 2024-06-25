import Navbar from "@/components/Navbar";
import { client } from "../sanity/lib/client";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { projects } from "../constants/index";
import { revPath } from "@/utils";
// export const revalidate = 60;

async function getPosts() {
  const latestposts = await client.fetch(`*[_type == "post"]{title, slug,icon,publishdate}`);
    // Sorting posts by publishdate in descending order (latest first)
    //@ts-ignore
    latestposts.sort((a, b) => new Date(b.publishdate) - new Date(a.publishdate));

    // Limiting to the latest 5 posts
    const posts = latestposts.slice(0, 5);
  return posts;
}
export const metadata: Metadata = {
  title: "mayank",
  description:
    "a blog that krehwell made to express his uncertainty and unrelated topic with his life",
  icons: "/favicon-32x32.png",
};

const Posts = ({ data }: any) => {
  revPath("/");
  let post = data ? (
    data?.map((item: any) => {
      return (
        <Link key={item.slug.current} href={`/blog/${item.slug.current}`}>
          <div className="homepage-latest-blog-post">
            <Image
              src={item.icon}
              alt=" image unrelated to the post"
              height={55}
              width={55}
              className="homepage-latest-thumbnail aspect-square object-cover"
              quality={20}
            />
            <div className="homepage-latest-blog-post-title">
              <h3>{item.title}</h3>
            </div>
          </div>
        </Link>
      );
    })
  ) : (
    <a>no post.</a>
  );

  return post;
};

const page = async () => {
  const posts = await getPosts();
  // console.log(posts);
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="homepage-container">
        <div>
          <h1>Hi, I&apos;m mayank. I am never sleepless.</h1>
          <p>
            A Engineering student from NIT Surat and a philoshoper.
          </p>
          <p>
            This is where I write stuff. Abandon all hope. Leave all uncertainty
            of my future. And dump all multimillion imaginary ideas.
          </p>
        </div>
        <div className="homepage-latest-blog-posts">
          <h2>
            📰 Latest Blog Posts{" "}
            <Link className="homepage-latest-blog-posts-view-all" href="/blog">
              View all
            </Link>
          </h2>
          <div className="homepage-latest-blog-posts-list">
            <Posts data={posts} />
          </div>
        </div>
        <div className="homepage-projects">
          <h2>🌍 My Pile of Shits</h2>
          <div className="homepage-project-list">
            {projects.map((project, index) => (
              <div className="homepage-project" key={index}>
                <h3>
                  <a href={project.repoLink}>
                    <div className="homepage-project-icon"> {project.icon}</div>
                    <div className="homepage-project-title">
                      {project.title}
                    </div>
                  </a>
                </h3>
                <p>{project.description}</p>
                <div className="homepage-project-btns">
                  <a
                    className="homepage-project-view-btn"
                    href={project.viewLink}
                  >
                    view
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
