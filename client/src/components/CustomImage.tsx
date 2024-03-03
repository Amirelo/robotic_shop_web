// React and libs
import React from "react";

// Properties
interface Props {
  src: string;
  alt?: string;
  //   width?: React.CSSProperties["width"];
  //   height?: React.CSSProperties["height"];
  marginBottom?: React.CSSProperties["marginBottom"];
  cursor?: React.CSSProperties['cursor'];
  onClick?(): void;
  preset?: keyof typeof imageStyles;
}

const CustomImage = (props: Props) => {
  return (
    <img
      onClick={props.onClick}
      style={{
        ...imageStyles.initial,
        ...imageStyles[props.preset ?? "icon"],
        marginBottom: props.marginBottom,
        cursor: props.cursor,
      }}
      src={props.src}
      alt={props.alt}
    />
  );
};

export default CustomImage;

// Styles - Image
const imageStyles: { [key: string]: React.CSSProperties } = {
  initial: {
    objectFit: "cover",
    borderRadius: 4,
  },
  icon: {
    width: 24,
    height: 24,
  },
  banner: {
    width: "40%",
  },
  fit: {
    width:'100%',
  }
};
