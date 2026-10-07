import { ticketMasterApi } from "@/shared/api/ticketMaster";
import { TMResponse } from "../types";

export const fetchEvents = async () => {
  const { data } = await ticketMasterApi.get<TMResponse>("events.json", {
    params: {
      countryCode: "BE",
      postalCode: "9000",
    },
  });
  return data;
};
