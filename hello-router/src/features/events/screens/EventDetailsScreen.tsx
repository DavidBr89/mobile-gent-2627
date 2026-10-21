import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { useEventById } from "../hooks/useEventById";

const EventDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const { event, isError, isLoading } = useEventById(id);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  if (isError) {
    Alert.alert("Er is een fout opgetreden", "Event niet gevonden");
  }

  return (
    <View>
      <Text>{event?.name}</Text>
    </View>
  );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({});
