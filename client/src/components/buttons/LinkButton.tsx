import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  children: string;
}

const LinkButton = (props: Props) => {
  return <NavLink to={props.to}>{props.children}</NavLink>;
};

export default LinkButton;
