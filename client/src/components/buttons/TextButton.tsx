// React and libs
import React from "react";

// Components
import CustomText from "../CustomText";
import themes from "../../preferences/theme/themes";
import CustomImage from "../CustomImage";
import { ic_add } from "../../assets/icons";
import { useSelector } from "react-redux";

// Properties
interface Props {
  children: string;
  marginBottom?: React.CSSProperties["marginBottom"];
  style?: React.CSSProperties;
  onClicked?(): void;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  hasButton?: boolean;
  onAddButtonClicked?(): void;
  isTertiary?: boolean;
  width?: React.CSSProperties['width']
}

const TextButton = (props: Props) => {
  const userTheme:keyof typeof themes = useSelector((store:any) => store.user.curTheme)
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
          ? themes[userTheme].primary_hover
          : props.backgroundColor
          ? props.backgroundColor
          : props.isTertiary ? '#00000000' : 
          themes[userTheme].primary,
        display: props.hasButton ? "flex" : "",
        width: props.width ?? '100%',
        height: props.hasButton ? 56 : 40,
        ...props.style,
      }}
    >
      {/* Button Title */}
      <CustomText fontWeight={"bold"} color={props.isTertiary ? themes[userTheme].text : themes[userTheme].background}>{props.children}</CustomText>
      {props.hasButton ? (
        <CustomImage
          src={ic_add}
          preset={"box"}
          backgroundcolor={themes[userTheme].primary}
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
