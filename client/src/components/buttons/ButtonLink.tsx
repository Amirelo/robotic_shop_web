// React and libs
import React from "react";
import { NavLink } from "react-router-dom";
import themes from "../../preferences/theme/themes";

// Properties
interface Props {
  to: string;
  children: string;
  marginBottom?: React.CSSProperties["marginBottom"];
  hideActive?: boolean
}

const ButtonLink = (props: Props) => {
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
        color: active && !props.hideActive
          ? themes["defaultTheme"].primary
          : hover
          ? themes["defaultTheme"].primary
          : themes["defaultTheme"].text,
        transition: "500ms",
        fontWeight: active ? "bold": "normal",
        fontSize: active ? 20 : 16
      }}
    >
      {props.children}
    </NavLink>
  );
};

export default ButtonLink;
