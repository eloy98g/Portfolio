import React from "react";
import StyleSheet from "react-native-media-query";
import { Text } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";
import { PHONE } from "../../theme/breakPoints";

interface Props {
  text: string;
}

const Title = ({ text }: Props) => (
  <Text dataSet={{ media: ids.title }} style={styles.title}>
    {text}
  </Text>
);

export default Title;

const { ids, styles } = StyleSheet.create({
  title: {
    fontFamily: family.bold,
    color: colors.white,
    fontSize: 36,
    [`@media (max-width: ${PHONE}px)`]: {
      textAlign: "center",
      fontSize: 32,

    },
  },
});
