import React, { useRef } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import SectionTitle from "./components/SectionTitle";
import Divider from "../../components/common/Divider";
import Header from "./components/Header";
import Footer from "../../components/Footer";

// Sections
import Hero from "./sections/Hero";
import Personal from "./sections/Personal";
import Studies from "./sections/Studies";
import Rio from "./sections/Rio";
import Resume from "./sections/Resume";
import TimeLine from "./sections/TimeLine";

// Theme
import { LAPTOP } from "../../theme/breakPoints";
import colors from "../../theme/colors";

export default function Home() {
  const scrollViewRef = useRef();

  const aboutRef = useRef();
  const resumeRef = useRef();
  const timelineRef = useRef();

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current && scrollViewRef.current) {
      console.log("should scroll");
      scrollViewRef.current.scrollTo({
        y: sectionRef.current.offsetTop - 42,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.screen}>
      <Header
        onAbout={() => scrollToSection(aboutRef)}
        onResume={() => scrollToSection(resumeRef)}
        onTimeLine={() => scrollToSection(timelineRef)}
      />
      <View style={styles.scrollContainer}>
        <ScrollView
          ref={scrollViewRef}
          style={{ height: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Divider height={92} />
          <Hero />
          <Divider height={42} />
          <SectionTitle title="👀 About" ref={aboutRef} />
          <Personal />
          <Divider height={42} />
          <Studies />
          <Divider height={42} />
          <Rio />
          <Divider height={42} />
          <SectionTitle title="📝 Resume" ref={resumeRef} />
          <Resume />
          <Divider height={42} />
          <SectionTitle title="🏄‍♂️ Timeline" ref={timelineRef} />
          <TimeLine />
          <Footer />
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
    height: "100%",
  },
});
