import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  label: string;
}

const Label = ({ label }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colors.grey,
  },
  label: {
    fontFamily: family.bold,
    fontSize: 22,
    color: colors.grey,
  },
});
