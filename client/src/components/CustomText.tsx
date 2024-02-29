import React from "react";

interface Props {
  children: string;
  fontWeight?: React.CSSProperties["fontWeight"];
  styleType?: keyof typeof textStyles;
  onClick?(): void;
}

const CustomText = (props: Props) => {
  const textType = props.styleType ? props.styleType : "normal";
  return (
    <p onClick={props.onClick} style={{ fontWeight: props.fontWeight, ...textStyles[textType] }}>
      {props.children}
    </p>
  );
};

export default CustomText;

const textStyles: { [key: string]: React.CSSProperties } = {
  header: {
    fontSize: 22,
  },
  subHeader: {
    fontSize: 20,
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
