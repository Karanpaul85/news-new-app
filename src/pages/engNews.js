import { wrapper } from "../redux/store";
import { getNewsdataEng } from "@/redux/action/getNewsData";
const EngNews = () => {
  return "ENGLISH NEWS";
};
EngNews.getInitialProps = wrapper.getInitialPageProps((store) => async (ctx) => {
    if(ctx.req){
      await store.dispatch(getNewsdataEng());
    }
  });
export default EngNews;
