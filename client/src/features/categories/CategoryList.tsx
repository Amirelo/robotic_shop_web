import React from "react";
import { CustomText } from "../../components";
import { TextButton } from "../../components/buttons";
import { CategoryModel } from "../../models";
import themes from "../../preferences/theme/themes";

interface Props {
  category: CategoryModel;
  subCategories: Array<any>;
  onCategoryClick?(): void;
}

const CategoryList = (props: Props) => {
  const [showSubCategories, setShowSubCategories] = React.useState(false);

  return (
    <>
      <TextButton
        style={{ width: "90%", textAlign: "left" }}
        backgroundColor={themes["defaultTheme"].background}
        hasButton
        onClicked={props.onCategoryClick}
        onAddButtonClicked={() => setShowSubCategories(!showSubCategories)}
      >
        {props.category.name}
      </TextButton>
      <div
        style={{
          maxHeight: showSubCategories ? 250 : 0,
          height: "100%",
          overflow: "hidden",
          transition: "500ms",
        }}
      >
        {props.subCategories.length > 0 ? (
          props.subCategories
            .filter((subCate) => subCate.categoryID == props.category.id)
            .map((filtered) => (
              <TextButton backgroundColor={themes["defaultTheme"].background}>
                {filtered.name}
              </TextButton>
            ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CategoryList;
