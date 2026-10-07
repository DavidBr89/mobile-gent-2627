import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import Test from "@/features/test/Test";
import { useRef } from "react";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import EventList from "./features/events/components/EventList";

export default function App() {
  const arr = [
    { id: 1, fName: "David" },
    { id: 2, fName: "David" },
    { id: 3, fName: "David" },
  ];

  const { top, bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={{ color: "white" }}>{top}</Text>
      {/* <Text style={styles.defaultTxt}>David Breckx</Text> */}
      {/* <Test /> 
      <FlatList
        style={{ flex: 1 }}
        data={arr}
        renderItem={({ item, index }) => {
          return <Text style={{ color: "white" }}>{item.fName}</Text>;
        }}
        keyExtractor={(item) => item.id.toString()}
      /> */}
      {/* <Text style={styles.defaultTxt}>Mobile</Text> */}
      <EventList />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  defaultTxt: {
    color: "white",
    marginVertical: 500,
  },
});
