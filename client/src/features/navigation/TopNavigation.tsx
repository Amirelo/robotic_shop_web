// React and libs
import React from "react";

// Constants
import {
  ROUTE_CART,
  ROUTE_CONTACT,
  ROUTE_EXPLORE,
  ROUTE_HOME,
  ROUTE_SIGN_IN,
} from "../../constants/AppConstant";

// Components
import { ButtonLink } from "../../components/buttons";
import { CustomImage, CustomText } from "../../components";

// Icons
import { flag_vn } from "../../assets/flags";
import {
  ic_chevron_left,
  ic_darkmode,
  ic_lightmode,
  ic_logo,
} from "../../assets/icons";
import themes from "../../preferences/theme/themes";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "../../redux/actions/UserAction";

const TopNavigation = () => {
  const userTheme: keyof typeof themes = useSelector((store:any) => store.user.curTheme)
  const dispatch = useDispatch()  
  
  const [showLanguages, setShowLanguages] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(()=>{
    if (darkMode == true){
      dispatch(updateTheme('dark'))
    } else{
      dispatch(updateTheme('defaultTheme'))
    }
  },[darkMode])

  return (
    <nav style={styles.body}>
      {/* Navigation - 1st line */}
      <div style={{...styles.top,background: `linear-gradient(to right, ${themes[userTheme].primary},${themes[userTheme].primary + '30'}, ${themes[userTheme].primary})`,}}>
        {/* Search bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            backgroundColor: themes[userTheme].primary,
            padding:4,
            borderRadius:4,
            position:'absolute',
            left: 12,
            top: 8
          }}
        >
          <CustomImage src={ic_logo} />
          <CustomText
            preset={"title"}
            color={themes[userTheme].background}
          >
            Emporium
          </CustomText>
        </div>
        <CustomImage
          onClick={() => setDarkMode(!darkMode)}
          src={darkMode ? ic_darkmode : ic_lightmode}
        />
        <div style={{ gap: 4 }}>
          <CustomImage preset={"flag"} src={flag_vn} />
          <CustomImage
            onClick={() => setShowLanguages(!showLanguages)}
            src={ic_chevron_left}
            style={{ rotate: showLanguages ? "90deg" : "-90deg" }}
          />
          <div
            style={{
              position: "absolute",
              maxHeight: showLanguages ? 500 : 0,
              transition: "250ms",
              overflow: "hidden",
            }}
          >
            <CustomText>Tieng Viet</CustomText>
            <CustomText>English</CustomText>
          </div>
        </div>
        <ButtonLink to={ROUTE_CONTACT} hideActive>Contact us</ButtonLink>
        <ButtonLink to={ROUTE_SIGN_IN} hideActive>
          Sign In
        </ButtonLink>
      </div>

      {/* Navigation - 2nd line */}
      <div style={styles.bottom}>
        <ButtonLink to={ROUTE_HOME}>Home</ButtonLink>
        <ButtonLink to={ROUTE_EXPLORE}>Explore</ButtonLink>
        <ButtonLink to={ROUTE_CART}>Cart</ButtonLink>
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
    
    marginBottom:10
  },
  bottom: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    margin: "auto",
  },
};
