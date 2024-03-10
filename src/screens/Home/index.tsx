import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Components
import Divider from "../../components/common/Divider";
import Header from "./components/Header";

// Sections
import Hero from "./sections/Hero";

// Theme
import { LAPTOP } from "../../theme/breakPoints";
import colors from "../../theme/colors";
import SectionTitle from "./components/SectionTitle";
import Personal from "./sections/Personal";
import Studies from "./sections/Studies";
import Rio from "./sections/Rio";

export default function Home() {
  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.scrollContainer}>
        <ScrollView>
          <Divider height={92} />
          <Hero />
          <SectionTitle title="👀 About" />
          <Personal />
          <Divider height={42} />
          <Studies />
          <Divider height={42} />
          <Rio />
          <Divider height={92} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  scrollContainer: {
    maxWidth: LAPTOP,
    paddingHorizontal: 22,
    width: "100%",
  },
});
