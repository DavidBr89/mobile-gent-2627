import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useEvents } from "../hooks/useEvents";
import EventCard from "../components/EventCard";

const EventListScreen = () => {
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

export default EventListScreen;

const styles = StyleSheet.create({});
