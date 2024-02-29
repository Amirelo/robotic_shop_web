import React from "react";
import { SearchBar } from "../products";
import ButtonLink from "../../components/buttons/ButtonLink";

const TopNavigation = () => {
  const [showSearch, setShowSearch] = React.useState(false);

  const onSearchIconPressed = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: 52,
          gap: 16,
        }}
      >
        {/* Search bar */}
        {showSearch ? <SearchBar /> : <></>}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: 16,
            paddingRight: 20,
          }}
        >
          <img
            width={24}
            height={24}
            src="/icons/ic_search.svg"
            onClick={onSearchIconPressed}
            alt=""
          />
          <p>Contact us</p>
          <p>Location</p>
          <p>Sign In</p>
        </div>
      </nav>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          margin: "auto",
        }}
      >
        <ButtonLink to="/">Home</ButtonLink>
        <ButtonLink to="/explore">Explore</ButtonLink>
        <a href="#">Robotic kits</a>
        <a href="#">Robots</a>
      </nav>
    </header>
  );
};

export default TopNavigation;
