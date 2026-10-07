import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TMEvent } from "../types";

interface EventCardProps {
  item: TMEvent;
}

const EventCard = ({ item }: EventCardProps) => {
  const firstImage = item.images[0];

  return (
    <View className="bg-amber-500 p-4 rounded-2xl m-4">
      <Image
        source={{
          uri: firstImage.url,
        }}
        style={{ width: 300, height: 150 }}
        resizeMode="contain"
      />
      <Text>{item.name}</Text>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 16,
  },
});
