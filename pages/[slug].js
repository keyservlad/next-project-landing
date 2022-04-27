import Head from "next/head";
import Layout from "../components/layout";
import fs from 'fs'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Arnaud's blog</title>
      </Head>
      <h1>Testing</h1>
      {/* Main */}
      <div id="main" className="alt">
        {/* One */}
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Generic</h1>
            </header>
            <span className="image main">
              <img src="assets/images/pic11.jpg" alt="" />
            </span>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
              mattis sagittis. Praesent rutrum sem diam, vitae egestas enim
              auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit
              amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a
              elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.
              Curabitur sapien risus, commodo eget turpis at, elementum
              convallis elit. Pellentesque enim turpis, hendrerit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Etiam
              tristique libero eu nibh porttitor fermentum. Nullam venenatis
              erat id vehicula viverra. Nunc ultrices eros ut ultricies
              condimentum. Mauris risus lacus, blandit sit amet venenatis non,
              bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at,
              euismod in lectus. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. In non lorem sit
              amet elit placerat maximus. Pellentesque aliquam maximus risus,
              vel sed vehicula.
            </p>
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
              Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
              Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien
              risus, commodo eget turpis at, elementum convallis elit.
              Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
            </p>
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

export const getStaticProps = async ({params : {slug}}) => {
  return {
    props : {
      slug
    }
  }
}