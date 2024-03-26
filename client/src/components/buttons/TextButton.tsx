// React and libs
import React from "react";

// Components
import CustomText from "../CustomText";
import themes from "../../preferences/theme/themes";
import CustomImage from "../CustomImage";
import { ic_add } from "../../assets/icons";

// Properties
interface Props {
  children: string;
  marginBottom?: React.CSSProperties["marginBottom"];
  style?: React.CSSProperties;
  onClicked?(): void;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  hasButton?: boolean;
  onAddButtonClicked?(): void;
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
        backgroundColor: hover
          ? themes["defaultTheme"].primary_hover
          : props.backgroundColor
          ? props.backgroundColor
          : themes["defaultTheme"].primary,
        display: props.hasButton ? "flex" : "",

        height: props.hasButton ? 56 : 40,
        ...props.style,
      }}
    >
      {/* Button Title */}
      <CustomText fontWeight={"bold"}>{props.children}</CustomText>
      {props.hasButton ? (
        <CustomImage
          src={ic_add}
          preset={"box"}
          backgroundcolor={themes["defaultTheme"].primary}
          onClick={props.onAddButtonClicked}
        />
      ) : (
        <></>
      )}
    </button>
  );
};

export default TextButton;

// Style - Button
const styles: { [key: string]: React.CSSProperties } = {
  button: {
    borderRadius: 4,
    width: "100%",
    transition: "500ms",
    borderWidth: 0,
    cursor: "pointer",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
