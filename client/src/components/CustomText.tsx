// React and libs
import React from "react";
import themes from "../preferences/theme/themes";
import { useSelector } from "react-redux";

// Properties
interface Props {
  children: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  preset?: keyof typeof textStyles;
  color?: React.CSSProperties["color"];
  onClick?(): void;
  marginBottom?: React.CSSProperties["marginBottom"];
  maxLines?: number;
  style?: React.CSSProperties;
}

const CustomText = (props: Props) => {
  const userTheme:keyof typeof themes = useSelector((store:any) => store.user.curTheme)
  const selectedStyle = props.preset ?? "normal";
  return (
    <p
      onClick={props.onClick}
      style={{
        ...textStyles[selectedStyle],
        fontWeight: props.fontWeight,
        color: props.color ?? themes[userTheme].text,
        marginBottom: props.marginBottom,
        maxHeight: props.maxLines ? props.maxLines * 20 : 500 * 20,
        overflow: "hidden",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        whiteSpace: props.maxLines ? "nowrap" : "",
        backgroundColor: props.preset == 'box' ? themes[userTheme].primary : '',
        ...props.style,
      
      }}
    >
      {props.children}
    </p>
  );
};

export default CustomText;

// Styles - Text
const textStyles: { [key: string]: React.CSSProperties } = {
  header: {
    fontSize: 60,
  },
  subHeader: {
    fontSize: 54,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
  },
  normal: {
    fontSize: 14,
  },
  small: {
    fontSize: 12,
  },
  box: {
    paddingBlock: 8,
    paddingInline: 12,
    borderRadius: 4,
    
    width: "fit-content",
    cursor: "pointer",
  },
};
