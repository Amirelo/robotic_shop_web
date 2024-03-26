// React and libs
import React from "react";

// Models
import { CategoryModel } from "../../models";

// Components
import { TextButton } from "../../components/buttons";

// User Preferences
import themes from "../../preferences/theme/themes";

// Properties
interface Props {
  category: CategoryModel;
  subCategories: Array<any>;
  onCategoryClick?(): void;
  onSubCategoryClick?(id: string): void;
}

// Display list of categories in Explore Screen, on the left
const CategoryList = (props: Props) => {
  const [showSubCategories, setShowSubCategories] = React.useState(false);

  return (
    <>
      {/* Category name */}
      <TextButton
        style={styles.body}
        backgroundColor={themes["defaultTheme"].background}
        hasButton
        onClicked={props.onCategoryClick}
        onAddButtonClicked={() => setShowSubCategories(!showSubCategories)}
      >
        {props.category.name}
      </TextButton>
      {/* Sub Categories */}
      <div
        style={{
          maxHeight: showSubCategories ? 250 : 0,
          ...styles.subItemContainer,
        }}
      >
        {props.subCategories.length > 0 ? (
          props.subCategories
            .filter((subCate) => subCate.categoryID == props.category.id)
            .map((filtered) => (
              <TextButton
                onClicked={() =>
                  props.onSubCategoryClick
                    ? props.onSubCategoryClick(filtered.id)
                    : ""
                }
                style={styles.subItem}
                backgroundColor={themes["defaultTheme"].background}
              >
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

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    width: "90%",
    textAlign: "left",
  },
  subItemContainer: {
    height: "100%",
    overflow: "hidden",
    transition: "500ms",
  },
  subItem: {
    textAlign: "left",
    paddingLeft: 20,
  },
};
