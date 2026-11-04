import { View, Text } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const index = () => {
  return <Redirect href="/(tabs)/events" />;
};

export default index;
