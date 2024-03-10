import React from "react";
import { StyleSheet, Text as RNText } from "react-native";
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";

interface Props {
  text: string | React.JSX.Element;
  bold?: boolean;
}

const Text = ({ text, bold = false }: Props) => (
  <RNText style={[styles.text, bold && { fontFamily: family.bold }]}>
    {text}
  </RNText>
);

export default Text;

const styles = StyleSheet.create({
  text: {
    fontFamily: family.normal,
    color: colors.white,
    fontSize: 20,
  },
});
