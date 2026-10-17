import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "@/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

const Providers = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default Providers;
