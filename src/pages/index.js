import Layout from "../../components/Layout";
import { allConst } from "../constant/const";
import styles from "../styles/Home.module.css";
import { newsData } from "../constant/mockdata";
import Image from "next/image";
import Head from "next/head";
import { ogMetaTags } from "../../components/commonOgMetatags";
import { wrapper } from "../redux/store";
import { homeData } from "../redux/actions/getNewsdata";

const Home = () => {
  const { textConst } = allConst;
  const customStyle = {
    newsSection: {
      padding: "0 16px",
      overflow: "auto",
    },
    newsCard: {
      background: "#fff",
      borderRadius: "8px",
      margin: "24px 0",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      display: "flex",
    },
    tumbNail: {
      position: "relative",
      width: "100px",
      height: "100px",
      flex: 1,
    },
    img: {
      borderRadius: "8px",
      position: "absolute",
      top: "-10px",
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    newsContent: {
      flex: 2,
      padding: "8px",
    },
    h3Hdeading: {
      fontSize: "14px",
      fontWeight: "500",
    },
    published: {
      marginTop: "10px",
      fontSize: "12px",
    },
  };
  return (
    <Layout>
      <Head>{ogMetaTags("hostName", newsData[0])}</Head>
      <div style={{ height: 200 }}>Slider</div>
      <div className={styles.mainHeading}>
        <h1>{textConst.LATEST_NEWS}</h1>
      </div>
      {newsData &&
        newsData.length &&
        newsData.map((item) => {
          return <div key={item.article_id}>{item.image_url}</div>;
        })}
      {/* <div className="newsSection" style={customStyle.newsSection}>
        {newsData &&
          newsData.length &&
          newsData.map((item) => {
            return (
              <div key={item.article_id} style={customStyle.newsCard}>
                <div className="tumbNail" style={customStyle.tumbNail}>
                  <Image
                    src={item.image_url}
                    width={100}
                    height={100}
                    alt=""
                    style={customStyle.img}
                  />
                </div>
                <div className="newsContent" style={customStyle.newsContent}>
                  <h3 style={customStyle.h3Hdeading}>{item.title}</h3>
                  <p style={customStyle.published}>
                    Published at : {item.pubDate}
                  </p>
                </div>
              </div>
            );
          })}
      </div> */}
    </Layout>
  );
};
// Home.getInitialProps = wrapper.getServerSideProps((store) => async (ctx) => {
//   if (ctx.req) {
//     await store.dispatch(homeData());
//   }
// });
Home.getInitialProps = wrapper.getInitialPageProps((store) => async (ctx) => {
  if (ctx.req) {
    await store.dispatch(homeData());
  }
});
export default Home;
