// React and libs
import React from "react";

// Components
import { ButtonLink } from "../../components/buttons";
import { CustomImage, CustomText } from "../../components";
import { flag_vn } from "../../assets/flags";
import { ic_chevron_left, ic_darkmode, ic_lightmode } from "../../assets/icons";
import themes from "../../preferences/theme/themes";

const TopNavigation = () => {
  const [showLanguages, setShowLanguages] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <nav style={styles.body}>
      {/* Navigation - 1st line */}
      <div style={styles.top}>
        {/* Search bar */}
        <CustomImage onClick={()=>setDarkMode(!darkMode)} src={darkMode ? ic_lightmode : ic_darkmode}/>
        <div style={{gap:4}}>
        <CustomImage preset={'flag'} src={flag_vn}/>
        <CustomImage onClick={()=> setShowLanguages(!showLanguages)} src={ic_chevron_left} style={{rotate: showLanguages ? '90deg' : '-90deg'}}/>
        <div style={{position:'absolute', maxHeight:showLanguages ? 500 : 0, transition:'250ms', overflow:'hidden'}}>
          <CustomText>Tieng Viet</CustomText>
          <CustomText>English</CustomText>
        </div>

        </div>
        <ButtonLink to="/contact">Contact us</ButtonLink>
        <ButtonLink to="/signin" hideActive>Sign In</ButtonLink>
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
