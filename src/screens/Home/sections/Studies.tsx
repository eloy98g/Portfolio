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

const Studies = () => {
  return (
    <Section>
      <View style={styles.wrapper} dataSet={{ media: ids.wrapper }}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/uco.png")}
        />
        <View style={styles.content} dataSet={{ media: ids.content }}>
          <Title text="Where it all began" />
          <Divider height={10} />
          <Text text="In 2016, what had been a hobby for years became my career, and my adventure into the world of computer engineering began." />
          <Divider height={10} />
          <Text
            text={
              <>
                <Text text="During my studies in Córdoba University, I met wonderful people and I was immersed in everything related to system administration, software engineering, databases... but most importantly, I found my true vocation:  " />
                <Text text="software development. " bold />
              </>
            }
          />
        </View>
      </View>
    </Section>
  );
};

export default Studies;

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
    resizeMode: "contain",
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
