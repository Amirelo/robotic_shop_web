// React and libs
import React from "react";
import themes from "../preferences/theme/themes";

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
  backgroundcolor?: React.CSSProperties['backgroundColor']
}

const CustomImage = (props: Props) => {
  return (
    <img
      onClick={props.onClick}
      style={{
        ...imageStyles.initial,
        ...imageStyles[props.preset ?? "icon"],
        marginBottom: props.marginBottom,
        cursor: props.preset && imageStyles[props.preset]?.cursor ? imageStyles[props.preset]?.cursor : props.cursor,
        backgroundColor: props.backgroundcolor,
        borderRadius:4,
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
    height:'100%',
  },
  box:{
    borderRadius:4,
    paddingBlock:8,
    paddingInline:12,
    backgroundColor: themes['defaultTheme'].primary,
    cursor: 'pointer'
  }
};
