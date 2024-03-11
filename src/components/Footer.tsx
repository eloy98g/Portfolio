import React from "react";
import StyleSheet from "react-native-media-query";
import { ExternalLink } from "lucide-react-native";
import { View } from "react-native";

// Components
import TextButton from "./common/TextButton";
import colors from "../theme/colors";
import { useWindowDimensions } from "react-native";
import { PHONE } from "../theme/breakPoints";
import Divider from "./common/Divider";

const Footer = () => {
  const width = useWindowDimensions().width;
  const openSourceHandler = () => {};
  const reactNativeHandler = () => {};
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
