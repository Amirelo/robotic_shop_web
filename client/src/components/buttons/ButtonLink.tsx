import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  children: string;
}

const ButtonLink = (props: Props) => {
  return <NavLink to={props.to}>{props.children}</NavLink>;
};

export default ButtonLink;
