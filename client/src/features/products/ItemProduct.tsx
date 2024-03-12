// Components
import React from "react";
import { CustomImage, CustomText } from "../../components";
import { TextButton } from "../../components/buttons";

// Models
import { ProductModel } from "../../models";
import { priceFormat, screenWidth } from "../../utils/Utilities";
import themes from "../../preferences/theme/themes";
import RatingStars from "./RatingStars";

// Properties
interface Props {
  data: ProductModel;
  marginRight?: React.CSSProperties["marginRight"];
}

const ItemProduct = (props: Props) => {
  return (
    <article style={{ ...styles.body }}>
      <div style={{ width: "100%", height: 150 }}>
        <CustomImage
          src={props.data.images[0]}
          preset={"fit"}
          marginBottom={8}
        />
      </div>
      {/* Product Name */}
      <CustomText preset={"title"} maxLines={1}>
        {props.data.name}
      </CustomText>
      {/* Product Price */}
      <div style={{ display: "flex", gap: 16 }}>
        {/* New price */}
        <CustomText>{priceFormat(props.data.price)}</CustomText>
        {/* Old price */}
        {props.data.discount.length > 0 ? (
          <CustomText style={{ textDecorationLine: "line-through" }}>
            {priceFormat(props.data.price)}
          </CustomText>
        ) : (
          <></>
        )}
      </div>
      {/* Rating */}
      <RatingStars rate={props.data.totalRating} />
      {/* Status */}
      <CustomText>
        {props.data.quantity > 0
          ? `Instock: ${props.data.quantity} units`
          : "Out of stock"}
      </CustomText>
      {/* Button - Add To Cart */}
      <TextButton style={{ marginTop:'auto' }}>Add To Cart</TextButton>
    </article>
  );
};

export default ItemProduct;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    backgroundColor: themes["defaultTheme"].primary,
    padding: 8,
    borderRadius: 4,
    width: screenWidth * 0.18,
    display:'flex',
    flexDirection:"column"
  },
};
