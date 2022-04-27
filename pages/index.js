import Head from "next/head";
import Layout from "../components/layout";
import fs from "fs";
import path from "path";
import moment from "moment";
import matter from "gray-matter";
import Link from "next/link";

export default function Home(props) {
  return (
    <Layout>
      <Head>
        <title>Arnaud's blog</title>
      </Head>

      {/* Banner */}
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Hi, my name is Forty</h1>
          </header>
          <div className="content">
            <p>
              A responsive site template designed by HTML5 UP
              <br />
              and released under the Creative Commons.
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button next scrolly">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Main */}
      <div id="main">
        {/* One */}
        <section id="one" className="tiles">
          {/* Loop over posts */}
          {props.posts.map((post) => (
            <article key={post.slug}>
              <span className="image">
                <img src={`/assets/images/${post.feature_image}`} alt="" />
              </span>
              <header className="major">
                <h3>
                  <Link href={`/${ post.slug }`} className="link">
                    {post.title}
                  </Link>
                </h3>
                <p>Ipsum dolor sit amet</p>
              </header>
            </article>
          ))}
        </section>
        {/* Two */}
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Massa libero</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
              et feugiat tempus.
            </p>
            <ul className="actions">
              <li>
                <a href="landing.html" className="button next">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const sortPosts = () => {
    const allPosts = fs.readdirSync("posts").map((filename) => {
      const slug = filename.replace(".md", "");
      const file = fs.readFileSync(path.join("posts", filename)).toString();
      const postData = matter(file);
      return {
        content: postData.content,
        title: postData.data.title,
        featured_image: postData.data.feature_image,
        date: postData.data.date,
        slug
      };
    });
    return allPosts.sort(
      (a, b) =>
        new moment(a.date).format("YYYY-MM-DD HH:mm:ss") <
        new moment(b.date).format("YYYY-MM-DD HH:mm:ss")
    );
  };
  return {
    props: {
      posts: sortPosts(),
    },
  };
};
