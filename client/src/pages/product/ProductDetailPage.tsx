// Components
import { useLocation } from "react-router-dom";
import { CustomImage, CustomText } from "../../components";
import React from "react";
import { ProductModel } from "../../models";
import { RatingStars } from "../../features/products";
import { priceFormat, screenWidth } from "../../utils/Utilities";
import { TextButton } from "../../components/buttons";
import { ic_add, ic_remove } from "../../assets/icons";
import themes from "../../preferences/theme/themes";
import { useDispatch, useSelector } from "react-redux";
import { saveUserCart } from "../../redux/actions/UserAction";

const ProductDetailPage = () => {
  const location = useLocation();
  const [product, setProduct] = React.useState<ProductModel>(location.state.product);
  const randomSongs = [
    "https://www.youtube.com/embed/mKxzJzp6oes?si=pO21iRjxbc7X17sh",
    "https://www.youtube.com/embed/cJOkT28U4V4?si=ma7qcCAGyVp2CMlQ",
    "https://www.youtube.com/embed/59uP6DOkYTM?si=cIvsYUT-9FV_4yET",
    "https://www.youtube.com/embed/O71GdeeND68?si=rYeTvwq4vyrws0AZ",
    "https://www.youtube.com/embed/ICOcEzXsEOI?si=eIjlM5MBxuBj7bKs",
  ];

  const [currentVideo, setCurrentVideo] = React.useState("");

  const [selectedImage, setSelectedImage] = React.useState(
    location.state.product.images[0]
  );
  const [quantity, setQuantity] = React.useState(0);

  const [mainImgHover, setMainImgHover] = React.useState(false);

    const userCart = useSelector((store:any) => store.user.carts)
    const dispatch = useDispatch()

  const onSubImageHover = (img: string) => {
    console.log("hover");
    setSelectedImage(img);
  };

  const onSaveCartClicked = () =>{
    if ( !userCart.includes(product)) {

      dispatch(saveUserCart(product));
    } else{
      console.log("Item already in cart")
    }
  }

  React.useEffect(() => {
    const rando = Math.floor(Math.random() * randomSongs.length);
    setCurrentVideo(randomSongs[rando]);
    console.log("random video:", rando, randomSongs[rando]);
    setProduct(location.state.product)
  }, []);

  const updateQuantity = (amount:number) => {
    if(amount >0 && amount <=product.quantity || amount <0 && amount >0){
      setQuantity(amount)
    }
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "90%" }}>
        <div style={{ display: "flex", marginBottom:20 }}>
          {/* Images */}
          <div style={{ flex: 1, height:'fit-content', overflow:'hidden', paddingRight:4 }}>
            <CustomImage
              style={{
                transform: mainImgHover ? "scale(2)" : "",
              }}
              src={selectedImage}
              preset={"detail"}
              marginBottom={20}
              onMouseEnter={() => setMainImgHover(true)}
              onMouseLeave={() => setMainImgHover(false)}
            />
            <div style={{ display: "flex", justifyContent: "space-between", }}>
              {product.images.length > 1 ? 
                product.images.map((item) => (
                  <CustomImage
                    onMouseEnter={() => onSubImageHover(item)}
                    preset={"detail_small"}
                    src={item}
                  />
                ))
               : 
                <></>
              }
            </div>
          </div>
          {/* Info */}
          <div
            style={{
              flex: 2,
              border: "1px solid black",
              marginLeft: 20,
              padding: 20,
              borderRadius: 4,
              height: "fit-content",
            }}
          >
            <CustomText preset={"title"}>{product.name}</CustomText>
            <RatingStars rate={product.totalRating} />
            <CustomText preset={"subTitle"} color="red" fontWeight={"bold"}>
              {priceFormat(product.price)}
            </CustomText>
            <CustomText>{`Sản phẩm hiện có: ${product.quantity.toString()}`}</CustomText>

            {/* quantity input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 20,
                height: "auto",
                width: "fit-content",
              }}
            >
              <CustomImage
                preset={"box"}
                backgroundcolor={themes["defaultTheme"].primary}
                src={ic_remove}
                onClick={() => updateQuantity(quantity -1)}
              />

              <input
                style={{
                  all: "unset",
                  width: 50,
                  paddingBlock: 8,
                  height: 20,
                  textAlign: "center",
                }}
                onChange={(e) => updateQuantity(Number(e.target.value))}
                type="number"
                value={quantity}
              />

              <CustomImage
                preset={"box"}
                backgroundcolor={themes["defaultTheme"].primary}
                src={ic_add}
                onClick={() => updateQuantity(quantity+1)}
              />
            </div>

            <TextButton style={{ width: "fit-content", paddingInline: 35 }} onClicked={onSaveCartClicked}>
              Add to cart
            </TextButton>
          </div>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: 20,
            borderRadius: 4,
            marginBottom: 20,
          }}
        >
          <CustomText preset={"title"}>Product Information</CustomText>
          <CustomText marginBottom={20}>{product.description}</CustomText>
          <iframe
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              width: "50%",
              height: screenWidth * 0.25,
            }}
            src={currentVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
