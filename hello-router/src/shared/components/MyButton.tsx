import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  Pressable,
  PressableProps,
  Touchable,
  GestureResponderEvent,
} from "react-native";
import React from "react";

interface MyButtonProps extends TouchableOpacityProps {
  label: string;
}

const MyButton = (props: MyButtonProps) => {
  const handlePress = (event: GestureResponderEvent) => {
    console.log("Op andere knop geklikt");
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.btn} {...props}>
      <Text style={styles.txt}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "blue",
    marginHorizontal: 8,
    borderRadius: 16,
    marginVertical: 8,
  },
  txt: {
    color: "white",
  },
});
