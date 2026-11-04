import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TMEvent } from "../types";
import { Link } from "expo-router";

interface EventCardProps {
  item: TMEvent;
}

const EventCard = ({ item }: EventCardProps) => {
  const firstImage = item.images[0];

  return (
    <Link
      asChild
      href={{
        pathname: "/(tabs)/events/[id]",
        params: {
          id: item.id,
          title: item.name,
        },
      }}>
      <Pressable className="bg-amber-500 p-4 rounded-2xl m-4 active:opacity-50">
        <Image
          source={{
            uri: firstImage.url,
          }}
          style={{ width: 300, height: 150 }}
          resizeMode="contain"
        />
        <Text>{item.name}</Text>
      </Pressable>
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
