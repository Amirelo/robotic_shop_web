// React and libs
import React from "react";

// Components
import CustomText from "./CustomText";

// Properties
interface Props {
  children: any;
  title: string;
  onChanged(e: any): void;
}

const OptionBox = (props: Props) => {
  return (
    <div>
      <div style={styles.body}>
        <CustomText style={styles.text}>{props.title}</CustomText>
        <select style={styles.select} onChange={(e: any) => props.onChanged(e)}>
          {props.children}
        </select>
      </div>
    </div>
  );
};

export default OptionBox;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    display: "flex",
    alignItems: "center",
    border: "1px solid black",
    width: "fit-content",
    borderRadius: 4,
    paddingInline: 12,
    paddingBlock: 14,
    overflow: "hidden",
    backgroundColor: "white",
  },
  select: {
    all: "unset",
  },
  text: {
    paddingRight: 4,
  },
};
