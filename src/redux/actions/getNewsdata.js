export const homeData = () => {
  console.log("action call");
  return {
    type: "HOMEDATA",
    payload: "Home Data",
  };
};
export const engData = () => {
  return {
    type: "HOMEENGDATA",
    payload: "eng Data",
  };
};
