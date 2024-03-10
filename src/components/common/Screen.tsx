import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../theme/colors";

interface Props {
  children?: any;
}

const Screen = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
