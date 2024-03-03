// Components
import React from "react";
import { CustomImage, CustomText } from "../../components";
import { TextButton } from "../../components/buttons";

// Models
import { ProductModel } from "../../models";

// Properties
interface Props {
  data: ProductModel;
  marginRight?: React.CSSProperties['marginRight']
}

const ItemProduct = (props: Props) => {
  return (
    <article style={{...styles.body}}>
      <CustomImage
        src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
        preset={"fit"}
      />
      {/* Product Name */}
      <CustomText>{props.data.name}</CustomText>
      {/* Product Price */}
      <div style={{ display: "flex", gap: 16 }}>
        {/* New price */}
        <CustomText>{props.data.price.toString()}</CustomText>
        {/* Old price */}
        {props.data.discount.length > 0 ? (
          <CustomText style={{ textDecorationLine: "line-through" }}>
            {props.data.price.toString()}
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
    backgroundColor: "gold",
    padding: 8,
    borderRadius: 4,
    width: 150,
  },
};
