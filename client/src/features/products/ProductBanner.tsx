import { CustomText } from "../../components";
import CustomImage from "../../components/CustomImage";
import { screenHeight } from "../../utils/Utilities";

const ProductBanner = () => {
  return (
    <div
      style={{
        width: "90%",
        height: screenHeight,
        backgroundColor: "black",
        borderRadius: 4,
      }}
    >
      <div>
        <div>
          <CustomText preset={"header"} color="white">Buy some stuff</CustomText>
        </div>
        <CustomImage
          preset={"banner"}
          src="https://images.pexels.com/photos/20222375/pexels-photo-20222375/free-photo-of-scruffy-dog-in-meadow.jpeg"
        />
      </div>
    </div>
  );
};

export default ProductBanner;
