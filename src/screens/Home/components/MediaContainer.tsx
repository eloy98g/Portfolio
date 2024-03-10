import React from "react";
import { StyleSheet, TouchableOpacity, View, Linking } from "react-native";
import { Mail, Linkedin, Github } from "lucide-react-native";

// Components
import Divider from "../../../components/common/Divider";

// Theme
import colors from "../../../theme/colors";

const MediaContainer = () => {
  const handleIcon = (icon) => {
    switch (icon) {
      case "linkedin":
        Linking.openURL(
          "https://www.linkedin.com/in/eloy-gomez-garcia-464125201/"
        );
        break;
      case "github":
        Linking.openURL("https://github.com/eloy98g");
        break;
      case "mail":
        Linking.openURL("mailto:eloygomez.contact@gmail.com");
        break;
    }
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => handleIcon("mail")}>
        <Mail color={colors.grey} size={24} />
      </TouchableOpacity>
      <Divider width={30} />
      <TouchableOpacity onPress={() => handleIcon("linkedin")}>
        <Linkedin color={colors.grey} size={24} />
      </TouchableOpacity>
      <Divider width={30} />
      <TouchableOpacity onPress={() => handleIcon("github")}>
        <Github color={colors.grey} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default MediaContainer;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
});
