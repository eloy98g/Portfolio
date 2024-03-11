import React from "react";
import StyleSheet from "react-native-media-query";
import { View, useWindowDimensions, Linking } from "react-native";
import { ExternalLink } from "lucide-react-native";

// Components
import TextButton from "./common/TextButton";
import Divider from "./common/Divider";

// Theme
import colors from "../theme/colors";
import { PHONE } from "../theme/breakPoints";

const Footer = () => {
  const width = useWindowDimensions().width;

  const openSourceHandler = () => {
    Linking.openURL("https://github.com/eloy98g/Portfolio");
  };

  const reactNativeHandler = () => {
    Linking.openURL("https://reactnative.dev/");
  };

  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <TextButton
        text="This page is open source!"
        icon={<ExternalLink size={20} color={colors.grey} />}
        onPress={openSourceHandler}
      />
      {width < PHONE && <Divider height={12} />}
      <TextButton
        text="💙  Made with React Native"
        onPress={reactNativeHandler}
      />
    </View>
  );
};

export default Footer;

const { ids, styles } = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
});
