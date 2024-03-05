import React from "react";
import { CustomImage } from "../../components";
import { ic_star, ic_star_outline } from "../../assets/icons";

interface Props{
  rate: number
}

const RatingStars = (props:Props) => {
  return (
    <div style={styles.body}>
      <CustomImage src={props.rate >=1 ? ic_star : ic_star_outline} />
      <CustomImage src={props.rate >=2 ? ic_star : ic_star_outline} />
      <CustomImage src={props.rate >=3 ? ic_star : ic_star_outline} />
      <CustomImage src={props.rate >=4 ? ic_star : ic_star_outline} />
      <CustomImage src={props.rate ==5 ? ic_star : ic_star_outline} />
    </div>
  );
};

export default RatingStars;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    display: "flex",
    gap: 2,
  },
};
