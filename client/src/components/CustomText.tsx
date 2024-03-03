// React and libs
import React from "react";

// Properties
interface Props {
  children: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  preset?: keyof typeof textStyles;
  color?: React.CSSProperties["color"];
  onClick?(): void;
  marginBottom?: React.CSSProperties["marginBottom"];
}

const CustomText = (props: Props) => {
  // Set default preset if not found
  return (
    <p
      onClick={props.onClick}
      style={{
        fontWeight: props.fontWeight,
        ...textStyles[props.preset ?? "normal"],
        color: props.color,
        marginBottom: props.marginBottom,
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
};
