// React and libs
import React from "react";
import themes from "../preferences/theme/themes";

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
  const selectedStyle = props.preset ?? "normal";
  return (
    <p
      onClick={props.onClick}
      style={{
        fontWeight: props.fontWeight,
        ...textStyles[selectedStyle],
        color: props.color ?? themes["defaultTheme"].text,
        marginBottom: props.marginBottom,
        maxHeight: props.maxLines ? props.maxLines * 20 : 500,
        overflow: "hidden",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        whiteSpace: "nowrap",
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
    backgroundColor: themes["defaultTheme"].primary,
    width: "fit-content",
    cursor: "pointer",
  },
};
