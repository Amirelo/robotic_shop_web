import React from "react";
import { CustomText } from "../../components";
import { ButtonLink } from "../../components/buttons";

const AppFooter = () => {
  return (
    <div style={styles.body}>
      <div style={styles.column}>
        <CustomText preset={"title"}>Information:</CustomText>
        <ButtonLink to="#" hideActive>About us</ButtonLink>
        <ButtonLink to="#" hideActive>Location</ButtonLink>
        <ButtonLink to="#" hideActive>Shipping and returns</ButtonLink>
      </div>
      <div style={styles.column}>
        <CustomText preset={"title"}>Contact</CustomText>
        <CustomText>Phone: 058 281 4653</CustomText>
        <CustomText>Email: trandang210799@gmail.com</CustomText>
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
    paddingBlock: 30,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
};
