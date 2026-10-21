import { Alert } from "react-native";
import { fetchEvents, fetchInfinityEvents } from "../api/events";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useEvents = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["fetchEvents"],
    queryFn: fetchEvents,
    initialData: {
      _embedded: {
        events: [],
      },
      page: {
        number: 0,
        size: 0,
        totalElements: 0,
        totalPages: 0,
      },
    },
  });

  return {
    events: data._embedded.events,
    isLoading,
    error,
    isError,
  };
};

export const useInfiniteEvents = () => {
  const { data, isError, error, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["fetchEvents", "infinite"],
    queryFn: ({ pageParam }) => {
      return fetchInfinityEvents(pageParam);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const next = lastPage.page.number + 1;
      if (next < lastPage.page.totalPages) {
        return next;
      }
      return undefined;
    },
  });

  return {
    data,
    fetchNextPage,
    isError,
    isLoading,
  };
};
