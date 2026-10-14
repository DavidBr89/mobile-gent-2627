import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useEvents } from "../hooks/useEvents";
import EventCard from "./EventCard";

const EventList = () => {
  const { events, isLoading } = useEvents();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={events}
      renderItem={({ item }) => {
        return <EventCard item={item} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default EventList;

const styles = StyleSheet.create({});
