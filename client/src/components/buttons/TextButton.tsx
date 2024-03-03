// React and libs
import React from "react";

// Components
import CustomText from "../CustomText";

// Properties
interface Props {
  children: string;
  marginBottom?: React.CSSProperties["marginBottom"];
}

const TextButton = (props: Props) => {
  return (
    <button
      style={{
        ...styles.button,
        marginBottom: props.marginBottom,
        borderWidth:0,
        cursor:'pointer',
      }}
    >
      <CustomText preset={"subTitle"}>{props.children}</CustomText>
    </button>
  );
};

export default TextButton;

// Style - Button
const styles: { [key: string]: React.CSSProperties } = {
  button: {
    backgroundColor: "#FFFFF0",
    borderRadius: 4,
    width:'100%'
  },
};
