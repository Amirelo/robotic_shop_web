// React and libs
import React from "react";

// Components
import { SearchBar } from "../products";
import { ButtonLink } from "../../components/buttons";
import { CustomImage } from "../../components";

const TopNavigation = () => {
  // Show/hide search bar
  const [showSearch, setShowSearch] = React.useState(false);

  const onSearchIconPressed = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <nav style={styles.body}>
      {/* Navigation - 1st line */}
      <div style={styles.top}>
        {/* Search bar */}
        {showSearch ? <SearchBar /> : <></>}
        <CustomImage src="/icons/ic_search.svg" onClick={onSearchIconPressed} />
        <ButtonLink to="#">Contact us</ButtonLink>
        <ButtonLink to="#">Location</ButtonLink>
        <ButtonLink to="#">Sign In</ButtonLink>
      </div>

      {/* Navigation - 2nd line */}
      <div style={styles.bottom}>
        <ButtonLink to="/">Home</ButtonLink>
        <ButtonLink to="/explore">Explore</ButtonLink>
        <ButtonLink to="#">Robotic kits</ButtonLink>
        <ButtonLink to="#">Robots</ButtonLink>
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
