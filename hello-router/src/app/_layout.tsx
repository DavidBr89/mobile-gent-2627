import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import "../global.css";
import { useEffect } from "react";

const queryClient = new QueryClient({});

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, errorFont] = useFonts({
    ShantellSans: require("../../assets/fonts/ShantellSans.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || errorFont) {
      // SplashScreen.hideAsync();
    }
  }, [fontsLoaded, errorFont]);

  if (!fontsLoaded && !errorFont) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
