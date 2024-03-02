import { CustomText } from "../../components";
import CustomImage from "../../components/CustomImage";
import TextButton from "../../components/buttons/TextButton";
import { screenHeight } from "../../utils/Utilities";

const ProductBanner = () => {
  return (
    <div
      style={{
        width: "90%",
        height: screenHeight,
        backgroundColor: "black",
        borderRadius: 4,
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        margin:'auto'
      }}
    >
        <div style={{width:'40%'}}>
          <CustomText preset={"header"} color="white">Buy some stuff</CustomText>
          <CustomText preset={"title"} color="white" marginBottom={20}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CustomText>
          <TextButton>Shop</TextButton>
        </div>
        <CustomImage
          preset={"banner"}
          src="https://images.pexels.com/photos/20222375/pexels-photo-20222375/free-photo-of-scruffy-dog-in-meadow.jpeg"
        />
    </div>
  );
};

export default ProductBanner;

