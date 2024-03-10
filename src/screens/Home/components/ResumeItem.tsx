import React from "react";
import { StyleSheet, View } from "react-native";
import Divider from "../../../components/common/Divider";

// Components
import Text from "../../../components/common/Text";
import IconTitle from "./IconTitle";

const ResumeItem = ({ data }) => {
  const { image, title, highlights } = data;
  return (
    <View style={styles.container}>
      <IconTitle image={image} title={title} />
      <Divider height={12} />
      {highlights.map((item) => (
        <>
          <Text text={"➤  " + item} />
          <Divider height={6} />
        </>
      ))}
    </View>
  );
};

export default ResumeItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
