import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Title from "../../../components/common/Title";
import Text from "../../../components/common/Text";
import Section from "../components/Section";

const Rio = () => {
  return (
    <Section>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/rio.jpeg")}
        />
        <View style={styles.content}>
          <Title text="The definitive debugging tool" />
          <Text text="We all have bad days when that package version automatically upgrades and everything just explodes." />
          <Text text="But the tables have shifted since Rio appeared and, even if he doesn't understand what i'm saying, he always get it right by helping me to find the mistake " />
        </View>
      </View>
    </Section>
  );
};

export default Rio;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
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
  },
});
