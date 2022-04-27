import Head from "next/head";
import Layout from "../components/layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function PostPage({ postData, content }) {
  return (
    <Layout>
      <Head>
        <title>Arnaud&apos;s blog</title>
      </Head>
      <h1>Testing</h1>
      {/* Main */}
      <div id="main" className="alt">
        {/* One */}
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{postData.title}</h1>
            </header>
            <span className="image main">
              <img src={`assets/images/${postData.feature_image}`} alt="" />
            </span>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  console.log("files: ", files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log("paths: ", paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const post = fs.readFileSync(path.join("posts", `${slug}.md`)).toString();
  const postData = matter(post);
  const content = marked(postData.content);
  console.log(content);
  return {
    props: {
      slug,
      content,
      postData: postData.data,
    },
  };
};
