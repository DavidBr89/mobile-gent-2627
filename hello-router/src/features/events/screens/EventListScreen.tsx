import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import { useEvents, useInfiniteEvents } from "../hooks/useEvents";
import EventCard from "../components/EventCard";

const EventListScreen = () => {
  // const { events, isLoading, isError } = useEvents();
  const { data, isLoading, isError, fetchNextPage } = useInfiniteEvents();

  const events = data?.pages.flatMap((page) => page._embedded.events) ?? [];

  console.log(data);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    Alert.alert("Er is iets fout gegaan", "Geen events");
  }

  return (
    <>
      <FlatList
        data={events}
        renderItem={({ item }) => {
          return <EventCard item={item} />;
        }}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          fetchNextPage();
        }}
      />
    </>
  );
};

export default EventListScreen;

const styles = StyleSheet.create({});
