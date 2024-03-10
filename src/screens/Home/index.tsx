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

export default function Home() {
  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.scrollContainer}>
        <ScrollView>
          <Divider height={92} />
          <Hero />
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
    flex: 1,
  },
});
