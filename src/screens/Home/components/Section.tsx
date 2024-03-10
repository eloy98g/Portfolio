import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../../../components/common/Title";
import colors from "../../../theme/colors";

interface Props {
  children?: any;
}

const Section = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: colors.secondary,
  },
  content: {
    padding: 22,
  },
});
