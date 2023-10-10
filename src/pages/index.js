import Layout from "../../components/Layout";
import { allConst } from "../constant/const";
import styles from "../styles/Home.module.css";
import { newsData } from "../constant/mockdata";
import Image from "next/image";
import Head from "next/head";
import { ogMetaTags } from "../../components/commonOgMetatags";
import { wrapper } from "../redux/store";
import { homeData, engData } from "../redux/actions/getNewsdata";
import { useSelector } from "react-redux";

const Home = () => {
  const engNewsData = useSelector((store) => store.newsData);
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
      paddingTop: "32.75%",
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
      <Head>{ogMetaTags(newsData[0])}</Head>
      <div style={{ height: 200 }}>Slider</div>
      <div className={styles.mainHeading}>
        <h1>{textConst.LATEST_NEWS}</h1>
      </div>
      {engNewsData?.eng}
      <div className="newsSection" style={customStyle.newsSection}>
        {newsData &&
          newsData.length &&
          newsData.map((item) => {
            return (
              <div key={item.article_id} style={customStyle.newsCard}>
                <div className="tumbNail" style={customStyle.tumbNail}>
                  <Image
                    src={item.image_url}
                    width={600}
                    height={600}
                    alt=""
                    style={customStyle.img}
                    loading="lazy"
                    blurDataURL={item.image_url}
                    placeholder="blur"
                  />
                </div>
                <div className="newsContent" style={customStyle.newsContent}>
                  <h2 style={customStyle.h3Hdeading}>{item.title}</h2>
                  <p style={customStyle.published}>
                    Published at : {item.pubDate}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(engData());
  await store.dispatch(homeData());
});

export default Home;
