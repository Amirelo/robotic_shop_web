// React and libs
import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import { CustomText, CustomImage } from "../../components";
import { TextButton } from "../../components/buttons";

// Utilities
import { screenHeight } from "../../utils/Utilities";

// User Preferences
import themes from "../../preferences/theme/themes";

// Interface
interface Props{
  children: string;
  title:string;
  src: string;
  marginBottom?: React.CSSProperties['marginBottom']
}

const ItemBanner = (props:Props) => {
  const navigate = useNavigate()

  const onShopClicked =() =>{
    navigate('/explore')
  }

  return (
    <div style={{...styles.body, marginBottom: props.marginBottom}}>
      <div style={{ width: "40%" }}>
        {/* Text - Header */}
        <CustomText preset={"header"} color={themes['defaultTheme'].background}>
          {props.title}
        </CustomText>
        {/* Text - Body */}
        <CustomText preset={"title"} marginBottom={20} color={themes['defaultTheme'].background}>
          {props.children}
        </CustomText>
        {/* Button - shop */}
        <TextButton onClicked={onShopClicked}>Shop</TextButton>
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
