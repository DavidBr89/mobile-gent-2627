import { Alert } from "react-native";
import { fetchEvents } from "../api/events";
import { useQuery } from "@tanstack/react-query";

export const useEvents = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["fetchEvents"],
    queryFn: fetchEvents,
    initialData: {
      _embedded: {
        events: [],
      },
    },
  });

  if (isError) {
    Alert.alert("Er iets fout gegaan", error.message);
  }

  return {
    events: data._embedded.events,
    isLoading,
    error,
    isError,
  };
};
