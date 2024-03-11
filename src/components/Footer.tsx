import React from "react";
import { ExternalLink } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

// Components
import TextButton from "./common/TextButton";
import colors from "../theme/colors";

const Footer = () => {
  const openSourceHandler = () => {};
  const reactNativeHandler = () => {};
  return (
    <View style={styles.container}>
      <TextButton
        text="This page is open source!"
        icon={<ExternalLink size={22} color={colors.grey} />}
        onPress={openSourceHandler}
      />
      <TextButton
        text="💙 Made with React Native"
        onPress={reactNativeHandler}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
