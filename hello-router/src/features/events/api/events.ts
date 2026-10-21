import { ticketMasterApi } from "@/shared/api/ticketMaster";
import { TMEvent, TMResponse } from "../types";
import { InfiniteQueryPageParamsOptions } from "@tanstack/react-query";

export const fetchEvents = async () => {
  const { data } = await ticketMasterApi.get<TMResponse>("events.json", {
    params: {
      countryCode: "BE",
      postalCode: "9000",
    },
  });
  return data;
};

export const fetchEventById = async (id: string | string[]) => {
  return await ticketMasterApi.get<TMEvent>(`events/${id}`);
  // return data;
};

export const fetchInfinityEvents = async (pageParam: number) => {
  const { data } = await ticketMasterApi.get<TMResponse>("events", {
    params: {
      countryCode: "BE",
      postalCode: "9000",
      page: pageParam,
      size: 20,
    },
  });
  return data;
};
