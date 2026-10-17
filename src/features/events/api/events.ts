import { ticketMasterApi } from "@/shared/api/ticketMaster";
import { TMEvent, TMResponse } from "../types";

export const fetchEvents = async () => {
  const { data } = await ticketMasterApi.get<TMResponse>("events.json", {
    params: {
      countryCode: "BE",
      postalCode: "9000",
    },
  });
  return data;
};

export const fetchEventById = async (id: string) => {
  return await ticketMasterApi.get<TMEvent>(`events/${id}`);
  // return data;
};
