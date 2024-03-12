import React from "react";
import { CustomText } from "../../components";
import { TextButton } from "../../components/buttons";
import { CategoryModel } from "../../models";
import themes from "../../preferences/theme/themes";

interface Props {
  category: CategoryModel;
  subCategories: Array<any>;
}

const CategoryList = (props: Props) => {
  const [showSubCategories, setShowSubCategories] = React.useState(false);

  return (
    <>
      <TextButton
        style={{ width: "90%", textAlign: "left" }}
        backgroundColor={themes["defaultTheme"].background}
        hasButton
        onAddButtonClicked={()=>setShowSubCategories(!showSubCategories)}
      >
        {props.category.name}
      </TextButton>
      <div
        style={{maxHeight: showSubCategories ? 250 : 0, height: "100%", overflow: "hidden", transition:'500ms' }}
      >
        {props.subCategories.length > 0 ? (
          props.subCategories
            .filter((subCate) => subCate.categoryID == props.category.id)
            .map((filtered) => <CustomText>{filtered.name}</CustomText>)
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CategoryList;
