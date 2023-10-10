export const homeData = () => {
  console.log("action call");
  return {
    type: "HOMEDATA",
    payload: "Home Data",
  };
};
export const engData = () => {
  console.log("action call eng");
  return {
    type: "HOMEENGDATA",
    payload: "eng Data",
  };
};
