import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "@/App";

const Providers = () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};

export default Providers;
