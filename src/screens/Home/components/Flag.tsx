import React from "react";
import { StyleSheet, Image, View } from "react-native";

import Divider from "../../../components/common/Divider";
import Text from "../../../components/common/Text";
import colors from "../../../theme/colors";

const Flag = ({ flag, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <Image style={styles.image} source={flag} />
      </View>
      <Divider width={20} />
      <Text text={title} />
    </View>
  );
};

export default Flag;

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: 38,
    height: 38,
    borderRadius: 25,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: colors.lightGrey,
    justifyContent: "center",
    alignItems: "center",
  },
});
