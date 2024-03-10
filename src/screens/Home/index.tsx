import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../theme/colors";
import Header from "./components/Header";

export default function Home() {
  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.scrollContainer}>
        <ScrollView></ScrollView>
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
    width:"100%",
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
});
