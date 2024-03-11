import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Divider from "../../../components/common/Divider";
import Text from "../../../components/common/Text";

const ScrollsToWrapper = ({ onAbout, onResume, onTimeLine }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onAbout}>
        <Text text={"About"} />
      </TouchableOpacity>
      <Divider width={15} />
      <TouchableOpacity onPress={onResume}>
        <Text text={"Resume"} />
      </TouchableOpacity>
      <Divider width={15} />
      <TouchableOpacity onPress={onTimeLine}>
        <Text text={"Timeline"} />
      </TouchableOpacity>
    </View>
  );
};

export default ScrollsToWrapper;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
});
