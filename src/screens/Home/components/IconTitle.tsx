import React from "react";
import { StyleSheet, View, Image } from "react-native";

// Components
import Divider from "../../../components/common/Divider";
import Label from "../../../components/common/Label";
import Text from "../../../components/common/Text";
import Title from "../../../components/common/Title";

interface Props {
  title: string;
  image?: any;
  subtitle?: string;
  label?: string;
}

const IconTitle = ({ image, title, label, subtitle }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.image} source={image} />
        <Divider width={20} />
        <View style={styles.column}>
          <Title text={title} />
          {subtitle && <Text text={subtitle} />}
        </View>
      </View>
      {label && <Label label={label} />}
    </View>
  );
};

export default IconTitle;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  column: {
    alignItems: "flex-start",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    resizeMode: "cover",
  },
});
