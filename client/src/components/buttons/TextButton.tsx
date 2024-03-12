// React and libs
import React from "react";

// Components
import CustomText from "../CustomText";
import themes from "../../preferences/theme/themes";

// Properties
interface Props {
  children: string;
  marginBottom?: React.CSSProperties["marginBottom"];
  style?: React.CSSProperties;
  onClicked?(): void;
}

const TextButton = (props: Props) => {
  // Fields
  const [hover, setHover] = React.useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={props.onClicked}
      style={{
        ...styles.button,
        marginBottom: props.marginBottom,
        borderWidth: 0,
        cursor: "pointer",
        backgroundColor: hover
          ? themes["defaultTheme"].primary_hover
          : themes["defaultTheme"].primary,
        ...props.style,
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
    height: 40,
    width: "100%",
    transition: "500ms",
  },
};
