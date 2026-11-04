import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useEvents, useInfiniteEvents } from "../hooks/useEvents";
import EventCard from "../components/EventCard";
import { useRouter } from "expo-router";

const EventListScreen = () => {
  // const { events, isLoading, isError } = useEvents();
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteEvents();

  const router = useRouter();

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
      <Pressable
        className="my-4 px-4 py-2"
        onPress={() => {
          router.push("/modal");
        }}>
        <Text className="text-center">Open Modal</Text>
      </Pressable>
      <FlatList
        data={events}
        renderItem={({ item }) => {
          return <EventCard item={item} />;
        }}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          if (isFetchingNextPage) {
            return <ActivityIndicator size="large" />;
          }
          return null;
        }}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
      />
    </>
  );
};

export default EventListScreen;

const styles = StyleSheet.create({});
