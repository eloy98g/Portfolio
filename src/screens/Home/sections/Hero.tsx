import React from "react";
import { StyleSheet, View } from "react-native";
import Divider from "../../../components/common/Divider";

// Components
import Title from "../../../components/common/Title";
import Text from "../../../components/common/Text";
import Section from "../components/Section";
import Flag from "../components/Flag";

// Theme
import colors from "../../../theme/colors";

const Hero = () => {
  return (
    <Section>
      <Title text={"Greetings! 👋"} />
      <Title text={"I'm Eloy Gómez"} />
      <Divider height={30} />
      <Text
        text={
          <>
            <Text text="I am a " />
            <Text text="Frontend Developer " bold />
            <Text text="specializing in the conception and implementation of contemporary and user-friendly digital experiences." />
          </>
        }
      />
      <Divider height={10} />
      <Text
        text={
          <>
            <Text text="With a background in " />
            <Text text="Computer Engineering " bold />
            <Text text="I've always had a passion for product design" />
          </>
        }
      />
      <Divider height={15} />
      <Divider height={1} width="100%" color={colors.lightGrey} />
      <Divider height={15} />
      <View style={styles.languageWrapper}>
        <Flag title="Spanish" flag={require("../../../assets/flags/spanish.png")} />
        <Divider width={50} />
        <Flag title="English" flag={require("../../../assets/flags/english.png")} />
      </View>
    </Section>
  );
};

export default Hero;

const styles = StyleSheet.create({
  languageWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row"
  },
});
