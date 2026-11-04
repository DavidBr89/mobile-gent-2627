import Axios from "axios";

export const ticketMasterApi = Axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2/",
  // params: {
  //   apikey: process.env.EXPO_PUBLIC_TMKEY,
  // },
});

ticketMasterApi.interceptors.request.use((config) => {
  const apiKey = process.env.EXPO_PUBLIC_TMKEY;

  // Token uit mijn securestore -> interceptors

  config.params = {
    ...config.params,
    apikey: apiKey,
  };

  return config;
});

ticketMasterApi.interceptors.response.use((response) => {
  if (response.status === 200) {
    console.log("Test vanuit interceptor");
  }
  return response;
});
