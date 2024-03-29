import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import MediaContainer from "./MediaContainer";
import ScrollsToWrapper from "./ScrollsToWrapper";

// Theme
import { LAPTOP } from "../../../theme/breakPoints";
import colors from "../../../theme/colors";

const Header = ({ onAbout, onResume, onTimeLine }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollsToWrapper
          onAbout={onAbout}
          onResume={onResume}
          onTimeLine={onTimeLine}
        />
        <MediaContainer />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.primary,
    zIndex: 10,
    position: "absolute",
    top: 0,
    alignItems: "center",
    boxShadow: "3px 3px 3px rgba(0,0,0,0,4)",
  },
  content: {
    width: "100%",
    maxWidth: LAPTOP,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
  },
});
