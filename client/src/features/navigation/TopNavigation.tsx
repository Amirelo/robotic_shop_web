// React and libs
import React from "react";

// Components
import { SearchBar } from "../products";
import { ButtonLink } from "../../components/buttons";
import { CustomImage } from "../../components";
import { NavLink } from "react-router-dom";

const TopNavigation = () => {

  return (
    <nav style={styles.body}>
      {/* Navigation - 1st line */}
      <div style={styles.top}>
        {/* Search bar */}
        <ButtonLink to="/contact">Contact us</ButtonLink>
        <ButtonLink to="/location">Location</ButtonLink>
        <ButtonLink to="#">Sign In</ButtonLink>
      </div>

      {/* Navigation - 2nd line */}
      <div style={styles.bottom}>
        <ButtonLink to="/">Home</ButtonLink>
        <ButtonLink to="/explore">Explore</ButtonLink>
        <ButtonLink to="/onsale">On Sale</ButtonLink>
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
