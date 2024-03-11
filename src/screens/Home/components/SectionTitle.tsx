import React, { forwardRef } from "react";
import { StyleSheet, View } from "react-native";

// Components
import Title from "../../../components/common/Title";

interface Props {
  title: string;
}

const SectionTitle = forwardRef(({ title }: Props, ref) => {
  return (
    <View style={styles.container} ref={ref}>
      <Title text={title} />
    </View>
  );
});

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 22,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
