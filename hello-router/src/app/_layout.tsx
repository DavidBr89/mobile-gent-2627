import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

import "../global.css";

const queryClient = new QueryClient({});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="events"
          options={{
            title: "Events",
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
