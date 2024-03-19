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
  cursor?: React.CSSProperties["cursor"];
  onClick?(): void;
  preset?: keyof typeof imageStyles;
  backgroundcolor?: React.CSSProperties["backgroundColor"];
  style?: React.CSSProperties;
  onMouseEnter?():void
  onMouseLeave?():void
}

const CustomImage = (props: Props) => {
  const [hover, setHover] = React.useState(false);

  const onUserMouseEnter = () => {
    if (props.onMouseEnter){
      props.onMouseEnter()
    }
    setHover(true)
  }

  const onUserMouseLeave = () => {
    if (props.onMouseLeave){
      props.onMouseLeave()
    }
    setHover(false)
  }

  return (
    <img
      onClick={props.onClick}
      onMouseEnter={() => onUserMouseEnter()}
      onMouseLeave={() => onUserMouseLeave()}
      style={{
        ...imageStyles.initial,
        ...imageStyles[props.preset ?? "icon"],
        transition: "500ms",
        marginBottom: props.marginBottom,
        cursor: props.cursor
          ? props.cursor
          : props.preset && imageStyles[props.preset]?.cursor
          ? imageStyles[props.preset]?.cursor
          : "",
        backgroundColor: props.backgroundcolor
          ? hover
            ? themes["defaultTheme"].primary_hover
            : props.backgroundcolor
          : "",
        borderRadius: imageStyles[props.preset ?? "icon"]?.borderRadius ? imageStyles[props.preset ?? "icon"].borderRadius : 4,
        ...props.style,
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
    width: "100%",
    height: "100%",
  },
  box: {
    borderRadius: 4,
    paddingBlock: 8,
    paddingInline: 12,
    cursor: "pointer",
  },
  detail:{
    width:'100%',
    height:'60%',
    border: '1px solid black'
  },
  detail_small:{
    width:'20%',
    border: '1px solid black'
  },
  social:{
    width:40,
    height:40
  },
  team:{
    width:300,
    height:300,
    borderRadius: 150
  },
  flag:{
    width:40,
    height:24
  }
};
