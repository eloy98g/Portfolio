import React from "react";
import StyleSheet from "react-native-media-query";
import { View, Image, useWindowDimensions } from "react-native";

// Components
import Divider from "../../../components/common/Divider";
import Label from "../../../components/common/Label";
import Text from "../../../components/common/Text";
import Title from "../../../components/common/Title";

// Theme
import { PHONE } from "../../../theme/breakPoints";

interface Props {
  title: string;
  image?: any;
  subtitle?: string;
  label?: string;
}

const IconTitle = ({ image, title, label, subtitle }: Props) => {
  const width = useWindowDimensions().width;
  const showDivider = width < PHONE;

  const dividerWidth = showDivider ? 10 : 20
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <View style={styles.row}>
        <Image style={styles.image} source={image} />
        <Divider width={dividerWidth} />
        <View style={styles.column}>
          <Title text={title} />
          {subtitle && <Text text={subtitle} />}
        </View>
      </View>
      {showDivider && <Divider height={12} />}
      {label && <Label label={label} />}
    </View>
  );
};

export default IconTitle;

const { ids, styles } = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    [`@media (max-width: ${PHONE}px)`]: {
      alignItems: "flex-start",
      flexDirection: "column",
    },
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
