// Components
import React from "react";
import { CustomImage, CustomText } from "../../components";
import { TextButton } from "../../components/buttons";

// Models
import { ProductModel } from "../../models";
import { priceFormat } from "../../utils/Utilities";
import themes from "../../preferences/theme/themes";

// Properties
interface Props {
  data: ProductModel;
  marginRight?: React.CSSProperties['marginRight']
}

const ItemProduct = (props: Props) => {
  return (
    <article style={{...styles.body}}>
      <div style={{width:'100%', height:150}}>
      <CustomImage
        src={props.data.image}
        preset={"fit"}
        marginBottom={8}
      />
      </div>
      {/* Product Name */}
      <CustomText>{props.data.name}</CustomText>
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
      <CustomText>Rating stars</CustomText>
      {/* Status */}
      <CustomText>
        {props.data.quantity > 0
          ? `Instock: ${props.data.quantity} units`
          : "Out of stock"}
      </CustomText>
      {/* Button - Add To Cart */}
      <TextButton>Add To Cart</TextButton>
    </article>
  );
};

export default ItemProduct;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    backgroundColor: themes['defaultTheme'].primary,
    padding: 8,
    borderRadius: 4,
    width: '20%',
  },
};
