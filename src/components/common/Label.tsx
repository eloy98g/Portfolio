import React from "react";
import StyleSheet from "react-native-media-query";
import { Text, View } from "react-native";

// Theme
import colors from "../../theme/colors";
import { family } from "../../theme/fonts";
import { PHONE } from "../../theme/breakPoints";

interface Props {
  label: string;
}

const Label = ({ label }: Props) => {
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <Text style={styles.label} dataSet={{ media: ids.label }}>
        {label}
      </Text>
    </View>
  );
};

export default Label;

const { ids, styles } = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    [`@media (max-width: ${PHONE}px)`]: {
      height: 30,
      borderWidth: 2,
      paddingHorizontal: 10,
    },
  },
  label: {
    fontFamily: family.bold,
    fontSize: 20,
    color: colors.grey,
    [`@media (max-width: ${PHONE}px)`]: {
      fontSize: 14,
      fontFamily: family.semibold,
    },
  },
});
