import { Stack } from "expo-router";

const EventsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Events",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Detail",
        }}
      />
    </Stack>
  );
};

export default EventsLayout;
