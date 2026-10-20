import Axios from "axios";

export const ticketMasterApi = Axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2/",
  params: {
    apikey: process.env.EXPO_PUBLIC_TMKEY,
  },
});
