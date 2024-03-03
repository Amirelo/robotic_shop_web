// React and libs
import React from "react";
import { NavLink } from "react-router-dom";

// Properties
interface Props {
  to: string;
  children: string;
  marginBottom?: React.CSSProperties["marginBottom"];
}

const ButtonLink = (props: Props) => {
  return (
    <NavLink to={props.to} style={{ marginBottom: props.marginBottom }}>
      {props.children}
    </NavLink>
  );
};

export default ButtonLink;
