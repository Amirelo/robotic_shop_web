// React and libs
import React from "react";

// Models
import { CategoryModel } from "../../models";

// Components
import { CustomText } from "../../components";
import { TextButton } from "../../components/buttons";
import themes from "../../preferences/theme/themes";

interface Props {
  categories?: Array<CategoryModel>;
  style?: React.CSSProperties;
}

const AdvanceFilterOption = (props: Props) => {
  return (
    <div style={props.style}>
      <CustomText preset={"title"}>Categories</CustomText>
      <div>
        {props.categories?.map((item) => {
          return (
            <>
            <TextButton
              style={{ width: "90%", textAlign: "left" }}
              backgroundColor={themes["defaultTheme"].background}
              hasButton
            >
              {item.name}
            </TextButton>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AdvanceFilterOption;
