import React from "react";
import Divider from "../../../components/common/Divider";
import colors from "../../../theme/colors";

// Components
import ResumeItem from "../components/ResumeItem";
import Section from "../components/Section";

// Data
import TIMELINE_DATA from "../data/TIMELINE_DATA";

const TimeLine = () => {
  return (
    <Section>
      {TIMELINE_DATA.map((data, index) => (
        <React.Fragment key={data.gid}>
          <ResumeItem  data={data} />
          {index < TIMELINE_DATA.length - 1 && (
            <>
              <Divider height={15} />
              <Divider height={1} width="100%" color={colors.lightGrey} />
              <Divider height={15} />
            </>
          )}
        </React.Fragment>
      ))}
    </Section>
  );
};

export default TimeLine;
