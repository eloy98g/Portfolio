import React from "react";
import { StyleSheet, View } from "react-native";
import Divider from "../../../components/common/Divider";

// Components
import Text from "../../../components/common/Text";
import IconTitle from "./IconTitle";

const ResumeItem = ({ data }) => {
  const { image, title, highlights, subtitle, label } = data;
  return (
    <View style={styles.container}>
      <IconTitle
        image={image}
        title={title}
        subtitle={subtitle}
        label={label}
      />
      <Divider height={12} />
      {highlights.map((item, index) => (
        <React.Fragment key={index}>
          <Text text={"➤  " + item} justified={false}/>
          <Divider height={6} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default ResumeItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
