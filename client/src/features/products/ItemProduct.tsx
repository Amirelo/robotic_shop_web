// React and libs
import { useNavigate } from "react-router-dom";

// Components
import React from "react";
import { CustomImage, CustomText } from "../../components";
import { TextButton } from "../../components/buttons";

// Models
import { ProductModel } from "../../models";

// Components
import RatingStars from "./RatingStars";

// Utilities
import { priceFormat, screenWidth } from "../../utils/Utilities";

// Properties
interface Props {
  data: ProductModel;
  marginRight?: React.CSSProperties["marginRight"];
  onClicked?(): any;
}

const ItemProduct = (props: Props) => {
  const navigate = useNavigate();

  const [display, setDisplay] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  // On Product click: navigate to Product Detail Page
  const onProductPressed = () => {
    navigate("/product_detail", { state: { product: props.data } });
  };

  // Start animation
  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div
      style={{
        ...styles.body,
        transform: display ? "scale(1)" : "scale(0)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <article
        style={{
          boxShadow: hover ? "-2px 2px 5px" : "",
          transition: "250ms",
          padding: 8,
          border: "1px solid black",
          overflow: "hidden",
          borderRadius: 4,
        }}
      >
        <div onClick={onProductPressed} style={{ cursor: "pointer" }}>
          <div style={{ width: "100%", height: 150 }}>
            {/* Product Image */}
            <CustomImage
              style={{ width: "100%" }}
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
        </div>
        {/* Button - Add To Cart */}
        <TextButton onClicked={props.onClicked} style={{ marginTop: "auto" }}>
          Add To Cart
        </TextButton>
      </article>
    </div>
  );
};

export default ItemProduct;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    width: screenWidth * 0.16,
    display: "flex",
    flexDirection: "column",
    transition: "1000ms",
  },
};
