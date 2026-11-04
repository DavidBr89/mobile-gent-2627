import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const EventModal = () => {
  const router = useRouter();

  return (
    <View>
      <Pressable
        onPress={() => {
          if (router.canGoBack()) {
            router.back();
          } else {
            router.push("/");
          }
        }}>
        <Text>Sluiten</Text>
      </Pressable>
      <Text>EventModal</Text>
    </View>
  );
};

export default EventModal;
