// React and libs
import React from "react";

// Models
import { CategoryModel } from "../../models";

// Components
import { CustomImage, CustomText } from "../../components";

// User Preferences
import themes from "../../preferences/theme/themes";

// Properties
interface Props {
  marginBottom?: React.CSSProperties["marginBottom"];
  data: CategoryModel;
  onClicked?(): void;
}

const ItemCategory = (props: Props) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{ ...styles.body, boxShadow: hover ? "-2px 2px 5px" : "" }}
      onClick={props.onClicked}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CustomImage preset={"fit"} src={props.data.image} />

      <div
        style={{
          ...styles.textFrame,
          backgroundImage: `linear-gradient(to top,${themes["defaultTheme"].primary} 60%, rgba(255,0,0,0))`,
        }}
      >
        <CustomText preset={"title"}>{props.data.name}</CustomText>
      </div>
    </div>
  );
};

export default ItemCategory;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    width: 200,
    height: 250,
    display: "flex",
    position: "relative",
    textAlign: "center",
    borderRadius: 20,
    overflow: "hidden",
    cursor: "pointer",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "green",
    transition: "250ms",
  },
  textFrame: {
    width: "100%",
    height: "30%",
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
