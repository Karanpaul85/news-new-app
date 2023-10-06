import { newsDataDummy } from "@/constant/mockdata";
export const getNewsdata = () => {
  return {
    type: "HINDI",
    payload: newsDataDummy,
  };
};
export const getNewsdataEng = () => {
  return {
    type: "ENGLISH",
    payload: [{ hi: "hi" }],
  };
};
