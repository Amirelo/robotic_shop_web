// React and libs
import React from "react";

// Components
import CustomText from "../CustomText";

// Properties
interface Props {
  children: string;
  marginBottom?: React.CSSProperties["marginBottom"];
  style?:React.CSSProperties
}

const TextButton = (props: Props) => {
  const [hover,setHover] = React.useState(false)

  return (
    <button
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> setHover(false)}
      style={{
        ...styles.button,
        marginBottom: props.marginBottom,
        borderWidth:0,
        cursor:'pointer',
        backgroundColor: hover ? "green" : "#FFFFF0",
        ...props.style
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
    borderRadius: 4,
    width:'100%',
    transition: '500ms'
  },
};
