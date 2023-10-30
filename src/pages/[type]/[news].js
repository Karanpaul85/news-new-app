import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { useSelector } from "react-redux";

const News = () => {
  const router = useRouter();
  const { type, news } = router.query;

  const newsData = useSelector((state) => state.newsData[type]);
  const singleNews =
  newsData && newsData.length &&
    newsData.find((item) => {
      return item.article_id === news;
    });
  console.log(singleNews, "singleNews");
  return <Layout>{singleNews?.title}</Layout>;
};
export default News;
