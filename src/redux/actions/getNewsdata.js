import axios from "axios";

export const homeData = (data) => {
  return {
    type: "HOMEDATA",
    payload: data,
  };
};
export const engData = () => {
  return {
    type: "HOMEENGDATA",
    payload: "eng Data KP",
  };
};
