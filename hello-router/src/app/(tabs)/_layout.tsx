import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useEventStore } from "@/features/events/stores/useEventStore";

const TabsLayout = () => {
  const favorites = useEventStore((state) => state.favorites);

  return (
    <Tabs
      screenOptions={{
        // tabBarStyle: { backgroundColor: "blue" },
        tabBarActiveTintColor: "red",
      }}>
      <Tabs.Screen
        name="events"
        options={{
          headerShown: false,
          title: "Events",
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name={{
                ios: "calendar",
                android: "calendar_view_month",
                web: "calendar_view_month",
              }}
              tintColor={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarBadge: favorites.length,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Instellingen",
          tabBarIcon: ({ color, size }) => (
            <SymbolView
              name={{
                ios: "gearshape",
                android: "settings",
              }}
              tintColor={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
