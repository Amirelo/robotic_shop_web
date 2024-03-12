// React and libs
import React from "react";

// Models
import { CategoryModel } from "../../models";

// Components
import { CustomText } from "../../components";
import { TextButton } from "../../components/buttons";
import themes from "../../preferences/theme/themes";
import { getAllSubCategories } from "../../services/SubCategoryServices";
import { CategoryList } from "../categories";

interface Props {
  categories?: Array<CategoryModel>;
  style?: React.CSSProperties;
}

const AdvanceFilterOption = (props: Props) => {
  const [listSubCategories, setListSubCategories] = React.useState<Array<any>>(
    []
  );

  const getData = async () => {
    const subCate = await getAllSubCategories();
    setListSubCategories(subCate);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ ...props.style, paddingRight: 12 }}>
      <div
        style={{
          border: "1px solid black",
          padding: 12,
          borderRadius: 4,
          marginBottom: 20,
        }}
      >
        <CustomText preset={"title"}>Price</CustomText>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <CustomText>Min (đ)</CustomText>
          <CustomText>Max (đ)</CustomText>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <input
            type="number"
            style={{ width: "30%", height: 40, paddingLeft: 8 }}
            placeholder="Min"
          />
          <input
            type="number"
            style={{ width: "30%", height: 40, paddingLeft: 8 }}
            placeholder="Max"
          />
        </div>
        <TextButton>Apply</TextButton>
      </div>

      <div
        style={{
          border: "1px solid black",
          padding: 12,
          borderRadius: 4,
          marginBottom: 20,
        }}
      >
        <CustomText preset={"title"}>Categories</CustomText>
        {props.categories?.map((item) => {
          return (
            <CategoryList
              category={item}
              subCategories={listSubCategories.filter(
                (subCate) => subCate.categoryID == item.id
              )}
            />
          );
        })}
      </div>

      <div style={{ border: "1px solid black", padding: 12, borderRadius: 4 }}>
        <CustomText preset={"title"}>Stock status</CustomText>
        <div style={{display:'flex', flexDirection:'column'}}>
        <label>
          <input type="checkbox" name="availability" style={{ marginRight: 4 }} />
          Available
        </label>

        <label>
          <input type="checkbox" name="availability" style={{ marginRight: 4 }} />
          Unavailable
        </label>
        </div>
      </div>
    </div>
  );
};

export default AdvanceFilterOption;
