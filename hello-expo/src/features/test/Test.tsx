import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyButton from "@/shared/components/MyButton";

const Test = () => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <MyButton label="Knop vanuit Test" />
      <MyButton label="Andere knop vanuit Test" />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
