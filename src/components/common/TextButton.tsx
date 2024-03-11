import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";
import Divider from "./Divider";

interface Props {
  text: string;
  onPress: any;
  icon?: any;
}

const TextButton = ({ text, onPress, icon }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      {icon && <Divider width={10} />}
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontFamily: family.bold,
    fontSize: 16,
    color: colors.grey,
  },
});
