import React from "react";
import { CustomText } from "../../components";
import { ButtonLink } from "../../components/buttons";

const AppFooter = () => {
  return (
    <div style={styles.body}>
      <div style={styles.column}>
        <CustomText preset={"title"}>Information:</CustomText>
        <ButtonLink to="#">About us</ButtonLink>
        <ButtonLink to="#">Shipping and returns</ButtonLink>
      </div>
      <div style={styles.column}>
        <CustomText preset={"title"}>Contact</CustomText>
        <ButtonLink to="#">Phone: 058 281 4653</ButtonLink>
        <ButtonLink to="#">Email: trandang210799@gmail.com</ButtonLink>
      </div>
    </div>
  );
};

export default AppFooter;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor:'#FFFFF0',
    paddingBlock: 12,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
};
