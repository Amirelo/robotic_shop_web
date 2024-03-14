// Components
import { useLocation } from "react-router-dom";
import { CustomImage, CustomText } from "../components";
import React from "react";
import { ProductModel } from "../models";
import { RatingStars } from "../features/products";
import { priceFormat, screenWidth } from "../utils/Utilities";
import { TextButton } from "../components/buttons";
import { ic_add, ic_remove } from "../assets/icons";
import themes from "../preferences/theme/themes";

const ProductDetailPage = () => {
  const location = useLocation();
  const [product, setProduct] = React.useState<ProductModel>(
    location.state.product
  );
  const randomSongs = [
    "https://www.youtube.com/embed/mKxzJzp6oes?si=pO21iRjxbc7X17sh", 
    "https://www.youtube.com/embed/cJOkT28U4V4?si=ma7qcCAGyVp2CMlQ",
    "https://www.youtube.com/embed/59uP6DOkYTM?si=cIvsYUT-9FV_4yET",
    "https://www.youtube.com/embed/O71GdeeND68?si=rYeTvwq4vyrws0AZ",
    "https://www.youtube.com/embed/ICOcEzXsEOI?si=eIjlM5MBxuBj7bKs"
  ]

  const [currentVideo, setCurrentVideo] = React.useState('')

  const [selectedImage, setSelectedImage] = React.useState(location.state.product.images[0])

  const [mainImgHover, setMainImgHover] = React.useState(false)

    const onSubImageHover = (img:string) =>{
      console.log("hover")
      setSelectedImage(img)
    }

    React.useEffect(()=> {
      const rando = Math.floor(Math.random() * randomSongs.length)
      setCurrentVideo(randomSongs[rando])
      console.log('random video:', rando,randomSongs[rando])
    },[])

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "90%" }}>
        <div style={{ display: "flex" }}>
          {/* Images */}
          <div style={{ flex: 1 }}>
            <CustomImage
            style={{transform: mainImgHover ? 'scale(1.5)' : '',
            transformOrigin: mainImgHover ? '0 0' : '',}}
              src={selectedImage}
              preset={"detail"}
              marginBottom={20}
              onMouseEnter={()=>setMainImgHover(true)}
              onMouseLeave={()=>setMainImgHover(false)}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {product.images.length > 1 ? (
                product.images.map((item) => (
                  <CustomImage onMouseEnter={()=>onSubImageHover(item)} preset={"detail_small"} src={item} />
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
        <div>
        <CustomText preset={'title'}>Product Information</CustomText>
        <CustomText marginBottom={20}>{product.description}</CustomText>
        <iframe
        style={{marginLeft:'auto', marginRight:'auto', display:'block', width:'50%', height: screenWidth*0.25, marginBottom:20}}
        src={currentVideo}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
