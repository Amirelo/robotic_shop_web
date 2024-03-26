// React and libs
import React from "react";

// Assets
import { ic_star, ic_star_outline } from "../../assets/icons";

// Components
import { CustomImage, CustomText } from "../../components";

interface Props {
  rate: number;
}

const RatingStars = (props: Props) => {
  return (
    <div style={styles.body}>
      {/* star - 1 */}
      <CustomImage src={props.rate >= 1 ? ic_star : ic_star_outline} />
      {/* star - 2 */}
      <CustomImage src={props.rate >= 2 ? ic_star : ic_star_outline} />
      {/* star - 3 */}
      <CustomImage src={props.rate >= 3 ? ic_star : ic_star_outline} />
      {/* star - 4 */}
      <CustomImage src={props.rate >= 4 ? ic_star : ic_star_outline} />
      {/* star - 5 */}
      <CustomImage src={props.rate == 5 ? ic_star : ic_star_outline} />
      {/* Rating in number */}
      <CustomText>{props.rate.toString()}</CustomText>
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
