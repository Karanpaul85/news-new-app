import { HYDRATE } from "next-redux-wrapper";
const initialState = {
};
const newsData = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case "HINDI": {
      return {
        ...state,
        hindi: action.payload,
      };
    }
    case "ENGLISH": {
        return {
          ...state,
          eng: action.payload,
        };
      }
    default:
      return state;
  }
};
export default newsData;
