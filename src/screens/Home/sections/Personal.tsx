import React from "react";
import StyleSheet from "react-native-media-query";
import { View, Image } from "react-native";

// Components
import Title from "../../../components/common/Title";
import Text from "../../../components/common/Text";
import Section from "../components/Section";
import { PHONE } from "../../../theme/breakPoints";

const Personal = () => {
  return (
    <Section>
      <View style={styles.wrapper} dataSet={{ media: ids.wrapper }}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/profile.jpeg")}
        />
        <View style={styles.content}>
          <Title text="Hello, world!" />
          <Text text="Ever since I was little, I have had an interest in computers and as a result I am largely self-taught." />
          <Text text="What I am passionate about, even more than developing useful software, is creating revolutionary tools that have a positive impact on user experiences." />
        </View>
      </View>
    </Section>
  );
};

export default Personal;

const { ids, styles } = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
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
    },
  },
});
