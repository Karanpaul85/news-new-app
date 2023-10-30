import react, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { allConst } from "../constant/const";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import { ogMetaTags } from "../../components/commonOgMetatags";
import { wrapper } from "../redux/store";
import { homeData, apiCall, apiError } from "../redux/actions/getNewsdata";
import { connect, useSelector } from "react-redux";
import axios from "axios";

function Home() {
  // const { hindi, loading } = useSelector((store) => store.newsData);
  const [hindi, setHindi] = useState([]);
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
  const fetchData = useCallback(async () => {
    const res = await axios(
      "https://newsdata.io/api/1/news?apikey=pub_30553943e4fa640b3256ae5087619b2dede08&language=hi&image=1&category=world"
    );
    await setHindi(res.data.results);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Layout>
      <Head>
        {ogMetaTags(
          hindi && hindi.length ? hindi?.[0] : "Welcome to world breaking News"
        )}
      </Head>
      <div style={{ height: 200 }}>Slider</div>
      <div className={styles.mainHeading}>
        <h1>{textConst.LATEST_NEWS}</h1>
      </div>
      <div className="newsSection" style={customStyle.newsSection}>
        {/* {loading && <div>Loading...</div>} */}
        {hindi &&
          hindi.length > 0 &&
          hindi.map((item, index) => {
            return (
              <div key={item.article_id} style={customStyle.newsCard}>
                <div className="tumbNail" style={customStyle.tumbNail}>
                  {index > 2 ? (
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
                  ) : (
                    <Image
                      src={item.image_url}
                      width={600}
                      height={600}
                      alt=""
                      style={customStyle.img}
                      blurDataURL={item.image_url}
                      placeholder="blur"
                      priority
                    />
                  )}
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
}

// Home.getInitialProps = wrapper.getInitialPageProps((store) => async (ctx) => {
//   // try {
//   //   console.time("apiCall");
//   //   store.dispatch(apiCall());
//   //   const res = await axios(
//   //     "https://newsdata.io/api/1/news?apikey=pub_30553943e4fa640b3256ae5087619b2dede08&language=hi&image=1&category=world"
//   //   );
//   //   console.timeEnd("apiCall");
//   //   await store.dispatch(homeData(res.data.results));
//   // } catch (error) {
//   //   console.log(error.data, "error");
//   // }
//   console.time("apiCall");
//   const res = await fetch(
//     "https://newsdata.io/api/1/news?apikey=pub_30553943e4fa640b3256ae5087619b2dede08&language=hi&image=1&category=world"
//   );
//   const data = await res.json();
//   await store.dispatch(homeData(data.results));
//   console.timeEnd("apiCall");
// });

export default Home;
