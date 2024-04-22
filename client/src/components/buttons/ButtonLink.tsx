// React and libs
import React from "react";
import { NavLink } from "react-router-dom";
import themes from "../../preferences/theme/themes";
import { useSelector } from "react-redux";

// Properties
interface Props {
  to: string;
  children: string;
  marginBottom?: React.CSSProperties["marginBottom"];
  hideActive?: boolean;
  color?: React.CSSProperties['color']
}

const ButtonLink = (props: Props) => {
  const userTheme:keyof typeof themes = useSelector((store:any) => store.user.curTheme) 
  // State
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  return (
    <NavLink
      to={props.to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={({ isActive }) => {
        setActive(isActive);
        return "";
      }}
      style={{
        marginBottom: props.marginBottom,
        color:
        
          active && !props.hideActive
            ?
             themes[userTheme].primary
            : hover
            
            ? themes[userTheme].primary
            : themes[userTheme].text,
        fontWeight: active ? "bold" : "normal",
        fontSize: active ? 20 : 16,
        transition: "500ms",
      }}
    >
      {props.children}
    </NavLink>
  );
};

export default ButtonLink;
