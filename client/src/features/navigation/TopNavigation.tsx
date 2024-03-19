// React and libs
import React from "react";

// Components
import { ButtonLink } from "../../components/buttons";
import { CustomImage } from "../../components";
import { flag_vn } from "../../assets/flags";

const TopNavigation = () => {

  return (
    <nav style={styles.body}>
      {/* Navigation - 1st line */}
      <div style={styles.top}>
        {/* Search bar */}
        <CustomImage preset={'flag'} src={flag_vn}/>
        <ButtonLink to="/contact">Contact us</ButtonLink>
        <ButtonLink to="" hideActive>Sign In</ButtonLink>
      </div>

      {/* Navigation - 2nd line */}
      <div style={styles.bottom}>
        <ButtonLink to="/">Home</ButtonLink>
        <ButtonLink to="/explore">Explore</ButtonLink>
        <ButtonLink to="/cart">Cart</ButtonLink>

      </div>
    </nav>
  );
};

export default TopNavigation;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    paddingBottom: 20,
  },
  top: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 52,
    gap: 16,
    paddingRight: 16,
  },
  bottom: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    margin: "auto",
  },
};
