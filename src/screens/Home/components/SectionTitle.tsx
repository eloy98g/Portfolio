import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../../../components/common/Title";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Title text={title} />
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 22,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
