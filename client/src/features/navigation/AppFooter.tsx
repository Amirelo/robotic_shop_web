// React and libs
import React from "react";

// Components
import { CustomText } from "../../components";
import { ButtonLink } from "../../components/buttons";

const AppFooter = () => {
  return (
    <div style={styles.body}>
      <div style={styles.column}>
        <CustomText preset={"title"}>Information:</CustomText>
        <ButtonLink to="/contact" hideActive>
          About us
        </ButtonLink>
        <ButtonLink to="/location" hideActive>
          Location
        </ButtonLink>
        <ButtonLink to="/shipping_and_return" hideActive>
          Shipping and returns
        </ButtonLink>
      </div>
      <div style={styles.column}>
        <CustomText preset={"title"}>Contact</CustomText>
        <CustomText style={{cursor:'pointer'}} onClick={()=>{navigator.clipboard.writeText("0582814653")}}>Phone: 058 281 4653</CustomText>
        <CustomText style={{cursor:'pointer'}} onClick={()=> {navigator.clipboard.writeText("trandang210799@gmail.com")}}>Email: trandang210799@gmail.com</CustomText>
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
    backgroundColor: "#FFFFF0",
    paddingBlock: 30,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
};
