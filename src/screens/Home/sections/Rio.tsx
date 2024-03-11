import React from "react";
import StyleSheet from "react-native-media-query";
import { View, Image } from "react-native";

// Components
import Title from "../../../components/common/Title";
import Text from "../../../components/common/Text";
import Section from "../components/Section";
import Divider from "../../../components/common/Divider";

// Theme
import { PHONE } from "../../../theme/breakPoints";

const Rio = () => (
  <Section>
    <View style={styles.wrapper} dataSet={{ media: ids.wrapper }}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/rio.jpeg")}
      />
      <View style={styles.content} dataSet={{ media: ids.content }}>
        <Divider height={12} />
        <Title text="The definitive debugging tool" />
        <Divider height={12} />
        <Text text="We all have bad days, like when that package automatically upgrades and everything just explodes." />
        <Divider height={12} />
        <Text text="But the tables have turned since Rio arrived in my life and, even if he doesn't understand what I'm saying, he always gets it right and helps me find the mistake!" />
      </View>
    </View>
  </Section>
);

export default Rio;

const { ids, styles } = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    [`@media (max-width: ${PHONE}px)`]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    paddingLeft: 22,
    justifyContent: "space-between",
    [`@media (max-width: ${PHONE}px)`]: {
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 0,
    },
  },
});
