// React and libs
import React from "react";

// Models
import { CategoryModel } from "../../models";

// Components
import { CustomText } from "../../components";
import { TextButton } from "../../components/buttons";
import themes from "../../preferences/theme/themes";
import {
  getAllSubCategories,
} from "../../services/SubCategoryServices";
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
    <div style={props.style}>
      <CustomText preset={"title"}>Categories</CustomText>
      <div>
        {props.categories?.map((item) => {
          return (
          <CategoryList category={item} subCategories={listSubCategories
                .filter((subCate) => subCate.categoryID == item.id)}/>

              
          );
        })}
      </div>
    </div>
  );
};

export default AdvanceFilterOption;
