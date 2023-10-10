import { HYDRATE } from "next-redux-wrapper";
const intialState = {};
const newsData = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return {
        ...state,
        ...payload.newsData,
      };
    case "HOMEDATA": {
      return {
        ...state,
        hindi: payload,
      };
    }
    default:
      return state;
  }
};
export default newsData;