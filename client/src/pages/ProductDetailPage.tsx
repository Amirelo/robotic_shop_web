// Components
import { useLocation } from "react-router-dom";
import { CustomImage, CustomText } from "../components";
import React from "react";
import { ProductModel } from "../models";
import { RatingStars } from "../features/products";
import { priceFormat } from "../utils/Utilities";
import { TextButton } from "../components/buttons";
import { ic_add, ic_remove } from "../assets/icons";
import themes from "../preferences/theme/themes";

const ProductDetailPage = () => {
  const location = useLocation();
  const [product, setProduct] = React.useState<ProductModel>(
    location.state.product
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "90%" }}>
        <div style={{ display: "flex" }}>
          {/* Images */}
          <div style={{ flex: 1 }}>
            <CustomImage
              src={product.images[0]}
              preset={"detail"}
              marginBottom={20}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {product.images.length > 1 ? (
                product.images.map((item) => (
                  <CustomImage preset={"detail_small"} src={item} />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          {/* Info */}
          <div style={{ flex: 2, paddingLeft: 20 }}>
            <CustomText preset={"title"}>{product.name}</CustomText>
            <RatingStars rate={product.totalRating} />
            <CustomText preset={"subTitle"} color="red" fontWeight={"bold"}>
              {priceFormat(product.price)}
            </CustomText>
            <CustomText>{`Sản phẩm hiện có: ${product.quantity.toString()}`}</CustomText>

            {/* quantity input */}
            <div style={{display:'flex', alignItems:'center', marginBottom:20, height:'auto', width:'fit-content'}}>
            <CustomImage
              preset={"box"}
              backgroundcolor={themes["defaultTheme"].primary}
              src={ic_remove}
            />

            <input style={{all: "unset",width:50, paddingBlock:8, height:20, textAlign:'center'}} type='number' value={0}/>

            <CustomImage
              preset={"box"}
              backgroundcolor={themes["defaultTheme"].primary}
              src={ic_add}
            />
            </div>

            <TextButton>Add to cart</TextButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
