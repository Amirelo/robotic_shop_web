// React and libs
import { useNavigate } from "react-router-dom";

// Components
import React from "react";
import { CustomImage, CustomText } from "../../components";
import { TextButton } from "../../components/buttons";

// Models
import { ProductModel } from "../../models";

// Components
import { RatingStars } from "../products";

// Utilities
import { priceFormat, screenWidth } from "../../utils/Utilities";

// Properties
interface Props {
  data: ProductModel;
  marginRight?: React.CSSProperties["marginRight"];
}

const ItemCart = (props: Props) => {
    const navigate = useNavigate();

  const [display, setDisplay] = React.useState(false)
  const [hover, setHover] = React.useState(false);

  const onProductPressed = () => {
    navigate("/product_detail", { state: { product: props.data } });
  };

  React.useEffect(()=>{
    setDisplay(true)
  },[])

    return (
        <article style={{...styles.body,boxShadow: hover ? "-2px 2px 5px" : "", transition:'250ms', overflow:'hidden',borderRadius: 4,}} >
        <div style={{  transform: display ? 'scale(1)': 'scale(0)', overflow:'hidden', transition:'1000ms'  }}onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          <div
            onClick={onProductPressed}
            style={{ cursor: "pointer", display: "flex", marginBottom: 12 }}
          >
            <div style={{ width: 150, height: 150, paddingRight: 12 }}>
              <CustomImage
                src={props.data.images[0]}
                preset={"item"}
                marginBottom={8}
              />
            </div>
            <div>
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
          </div>
          {/* Button - Add To Cart */}
        </div>
        </article>
      );
    };

export default ItemCart

const styles: { [key: string]: React.CSSProperties } = {
    body: {
      padding: 8,
      borderRadius:4,
      border: "1px solid black",
      width: screenWidth * 0.3,
      display: "flex",
      flexDirection: "column",
    },
  };