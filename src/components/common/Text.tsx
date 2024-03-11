import React from "react";
import StyleSheet from "react-native-media-query";
import { Text as RNText } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";
import { PHONE } from "../../theme/breakPoints";

interface Props {
  text: string | React.JSX.Element;
  bold?: boolean;
}

const Text = ({ text, bold = false }: Props) => (
  <RNText
    dataSet={{ media: ids.text }}
    style={[styles.text, bold && { fontFamily: family.bold }]}
  >
    {text}
  </RNText>
);

export default Text;

const { ids, styles } = StyleSheet.create({
  text: {
    fontFamily: family.light,
    color: colors.white,
    fontSize: 20,
    [`@media (max-width: ${PHONE}px)`]: {
      textAlign: "justify",
      fontSize: 16,
    },
  },
});
