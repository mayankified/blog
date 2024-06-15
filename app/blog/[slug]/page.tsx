import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import dayjs from "dayjs";
import { PortableText } from "next-sanity";
import { Metadata } from "next";
import Commnets from "@/components/Commnets";

interface Params {
  params: {
    slug: string;
  };
}

export const revalidate = 60;



async function getBlogPost(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current =="${slug}"]{title, slug,icon,publishdate,metaDescription,body,_id,tags[]->{_id,slug,name}}`
  );
  return post;
}


export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const data = await client.fetch(
    `*[_type == "post" && slug.current =="${params.slug}"]{title,icon,metaDescription}`
  );
  return {
    title: data[0] ? data[0].title : "Blog Post | Coding Blog",
    description: data[0] && data[0].metaDescription,
    icons: data[0] && data[0].icon,
  };
}
const page = async (params: Params) => {
  const data = await getBlogPost(params.params.slug);
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="blog-post-container">
        {data[0] ? (
          <>
            <div className="blog-post-top-section">
              <h1>{data[0]?.title}</h1>
              <div className="blog-post-top-meta">
                <span>
                  {dayjs(data[0]?.publishdate).format("MMMM D, YYYY")}
                </span>
                {data[0]?.tags?.map((e: any) => {
                  return (
                    <Link
                      key={e.slug.current}
                      className="blog-post-top-tag-btn"
                      href={`/blog/tags/${e.slug.current}`}
                    >
                      <span>{e.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: data[0].body.map((item:any) => item.children).join(""),
              }}
              className="blog-post-body-content"
            /> */}
            <div className="blog-post-body-content">
              <PortableText value={data[0]?.body} />
            </div>
          </>
        ) : (
          <div className="blog-post-get-data-error-msg">
            {
              <span>
                Blog post not found. (if you really think this page should exist
                tho try to reload the browser)
              </span>
            }
          </div>
        )}
      </div>
      <Commnets/>
      <Footer />
    </div>
  );
};

export default page;
