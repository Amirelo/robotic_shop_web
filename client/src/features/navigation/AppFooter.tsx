// React and libs
import React from "react";

// Components
import { CustomText } from "../../components";
import { ButtonLink } from "../../components/buttons";
import { ROUTE_CONTACT, ROUTE_SHIPPING } from "../../constants/AppConstant";

const AppFooter = () => {
  return (
    <div style={styles.body}>
      <div style={styles.column}>
        <CustomText preset={"title"}>Information:</CustomText>
        <ButtonLink to={ROUTE_CONTACT} hideActive>
          About us
        </ButtonLink>
        <ButtonLink to={ROUTE_SHIPPING} hideActive>
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
    marginTop:30
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
};
