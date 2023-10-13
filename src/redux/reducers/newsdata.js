import { HYDRATE } from "next-redux-wrapper";
const intialState = {
  hindi: [],
  eng: [],
  error: null,
  loading: false,
};
const newsData = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE: {
      return {
        ...state,
        ...payload.newsData,
      };
    }
    case "APICALL": {
      return {
        ...state,
        loading: true,
      };
    }
    case "APIERROR": {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case "HOMEDATA": {
      return {
        ...state,
        hindi: payload,
        loading: false,
      };
    }
    case "HOMEENGDATA": {
      return {
        ...state,
        eng: payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
export default newsData;
