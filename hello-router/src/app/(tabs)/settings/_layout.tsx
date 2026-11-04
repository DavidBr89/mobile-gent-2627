import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";

const _layout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          title: "Algemeen",
          drawerLabel: "Andere label",
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          title: "About",
        }}
      />
    </Drawer>
  );
};

export default _layout;
