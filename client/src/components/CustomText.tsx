import React from "react";

interface Props {
  children: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  preset?: keyof typeof textStyles;
  color?: React.CSSProperties["color"];
  onClick?(): void;
  marginBottom?: React.CSSProperties['marginBottom']
}

const CustomText = (props: Props) => {
  const textType = props.preset ? props.preset : "normal";
  return (
    <p
      onClick={props.onClick}
      style={{
        fontWeight: props.fontWeight,
        ...textStyles[textType],
        color: props.color,
        marginBottom:props.marginBottom,
      }}
    >
      {props.children}
    </p>
  );
};

export default CustomText;

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
