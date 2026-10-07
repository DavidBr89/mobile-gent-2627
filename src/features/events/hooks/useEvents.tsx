import { useEffect, useState } from "react";
import { fetchEvents } from "../api/events";
import { Alert } from "react-native";
import { TMEvent } from "../types";

export const useEvents = () => {
  const [events, setEvents] = useState<TMEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const data = await fetchEvents();
        setEvents(data._embedded.events);
      } catch (error) {
        console.log(error);
        Alert.alert("Er is iets fout gegaan", "Ophalen van events niet gelukt");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    events,
    isLoading,
  };
};
