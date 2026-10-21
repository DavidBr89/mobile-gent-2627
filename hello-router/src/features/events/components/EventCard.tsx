import { Image, StyleSheet, Text, View } from "react-native";
import { TMEvent } from "../types";
import { Link } from "expo-router";

interface EventCardProps {
  item: TMEvent;
}

const EventCard = ({ item }: EventCardProps) => {
  const firstImage = item.images[0];

  return (
    <Link
      href={{
        pathname: "/(tabs)/events/[id]",
        params: {
          id: item.id,
        },
      }}
      className="bg-amber-500 p-4 rounded-2xl m-4">
      <Image
        source={{
          uri: firstImage.url,
        }}
        style={{ width: 300, height: 150 }}
        resizeMode="contain"
      />
      <Text>{item.name}</Text>
    </Link>
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
