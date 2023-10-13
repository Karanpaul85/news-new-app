export const apiCall = () => {
  return {
    type: "APICALL",
  };
};
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
export const apiError = (err) => {
  return {
    type: "APIERROR",
    payload: err,
  };
};
