import EventDetailsScreen from "@/features/events/screens/EventDetailsScreen";
import { Stack, useLocalSearchParams } from "expo-router";

const EventDetail = () => {
  const { title } = useLocalSearchParams();

  const eventTitle = Array.isArray(title) ? title[0] : title;

  return (
    <>
      <Stack.Screen options={{ title: eventTitle }} />
      <EventDetailsScreen />
    </>
  );
};

export default EventDetail;
