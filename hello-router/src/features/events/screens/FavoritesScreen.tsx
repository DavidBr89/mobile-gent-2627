import { View, Text, FlatList } from "react-native";
import React from "react";
import { useEventStore } from "../stores/useEventStore";

const FavoritesScreen = () => {
  const favorites = useEventStore((state) => state.favorites);

  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavoritesScreen;
