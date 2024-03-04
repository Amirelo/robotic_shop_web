// React and libs
import React from "react";

// Components
import { CustomText, CustomImage } from "../../components";
import { TextButton } from "../../components/buttons";

// Utilities
import { screenHeight } from "../../utils/Utilities";

// Interface
interface Props{
  children: string;
  title:string;
  src: string;
  marginBottom?: React.CSSProperties['marginBottom']
}

const ItemBanner = (props:Props) => {
  return (
    <div style={{...styles.body, marginBottom: props.marginBottom}}>
      <div style={{ width: "40%" }}>
        {/* Text - Header */}
        <CustomText preset={"header"} color="white">
          {props.title}
        </CustomText>
        {/* Text - Body */}
        <CustomText preset={"title"} color="white" maxLines={1} marginBottom={20}>
          {props.children}
        </CustomText>
        {/* Button - shop */}
        <TextButton>Shop</TextButton>
      </div>
      {/* Image */}
      <CustomImage
        preset={"banner"}
        src={props.src}
      />
    </div>
  );
};

export default ItemBanner;

// Styles - Banner
const styles: { [key: string]: React.CSSProperties } = {
  body: {
    height: screenHeight,
    backgroundColor: "black",
    borderRadius: 4,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
};
