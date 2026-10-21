import { useQuery } from "@tanstack/react-query";
import { fetchEventById } from "../api/events";
import { Alert } from "react-native";

// export function useEventId(id: string) {
//   return useQuery({
//     queryKey: ["fetchEventById", id],
//     queryFn: () => fetchEventById(id),
//   });
// }

export const useEventById = (id: string | string[]) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["fetchEventById", id],
    queryFn: () => fetchEventById(id),
  });

  return {
    event: data?.data,
    error,
    isError,
    isLoading,
  };
};
