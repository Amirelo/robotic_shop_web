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
import { BannerModel } from "../../models";

// Interface
interface Props{
  data: BannerModel;
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
          {props.data.title}
        </CustomText>
        {/* Text - Body */}
        <CustomText preset={"title"} marginBottom={20} color={themes['defaultTheme'].background}>
          {props.data.description}
        </CustomText>
        {/* Button - shop */}
        <TextButton onClicked={onShopClicked}>Shop</TextButton>
      </div>
      {/* Image */}
      <CustomImage
        preset={"banner"}
        src={props.data.image}
      />
    </div>
  );
};

export default ItemBanner;

// Styles - Banner
const styles: { [key: string]: React.CSSProperties } = {
  body: {
    height: screenHeight,
    backgroundColor: themes['defaultTheme'].text,
    borderRadius: 4,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
};
