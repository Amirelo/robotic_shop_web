// React and libs
import React from "react";
import { NavLink } from "react-router-dom";
import themes from "../../preferences/theme/themes";

// Properties
interface Props {
  to: string;
  children: string;
  marginBottom?: React.CSSProperties["marginBottom"];
}

const ButtonLink = (props: Props) => {
  const [hover, setHover] = React.useState(false);

  return (
    <NavLink
      to={props.to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ marginBottom: props.marginBottom, color: hover ?  'green' : themes['defaultTheme'].text, transition:'500ms'}}
    >
      {props.children}
    </NavLink>
  );
};

export default ButtonLink;
