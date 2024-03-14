// React and libs
import React from "react";

// Models
import { CategoryModel } from "../../models";

// Components
import { CustomImage, CustomText } from "../../components";
import { TextButton } from "../../components/buttons";
import { getAllSubCategories } from "../../services/SubCategoryServices";
import { CategoryList } from "../categories";
import { ic_expand } from "../../assets/icons";

interface Props {
  categories?: Array<CategoryModel>;
  style?: React.CSSProperties;
  onCategoryClicked?(id: string): void;
  onSubCategoryClicked?(id:string): void;
  setMinPrice?: any;
  setMaxPrice?: any;
  onApplyClicked?(): void
  onAvailableChecked?(status: boolean): void
}

const AdvanceFilterOption = (props: Props) => {
  const [listSubCategories, setListSubCategories] = React.useState<Array<any>>(
    []
  );
  const [minPrice, setMinPrice] = React.useState<number>()
  const [maxPrice, setMaxPrice] = React.useState<number>()

  const [showPrice, setShowPrice] = React.useState(false);
  const [showCategories, setShowCategories] = React.useState(false);
  const [showStockStatus, setShowStockStatus] = React.useState(false);

  const [showAvailable, setShowAvailable] = React.useState(true)

  const getData = async () => {
    const subCate = await getAllSubCategories();
    setListSubCategories(subCate);
  };

  const updateMinPrice = (value:number) => {
    setMinPrice(value)
    props.setMinPrice(value)
  }

  const updateMaxPrice = (value:number) => {
    setMaxPrice(value)
    props.setMaxPrice(value)
  }

  const onAvailableChecked = (e:any) => {
    const newStatus = !showAvailable
    setShowAvailable(newStatus)
    if (props.onAvailableChecked) {
      props.onAvailableChecked(newStatus)
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(()=>{
  },[showAvailable])

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomText preset={"title"}>Price</CustomText>
          <CustomImage
            onClick={() => setShowPrice(!showPrice)}
            style={{ transform: `rotate(${showPrice ? "180deg" : "0deg"})` }}
            src={ic_expand}
          />
        </div>
        <div
          style={{
            maxHeight: showPrice ? 400 : 0,
            overflow: "hidden",
            transition: "500ms",
          }}
        >
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
              value={minPrice}
              onChange={(e) => updateMinPrice(Number(e.target.value))}
            />
            <input
              type="number"
              style={{ width: "30%", height: 40, paddingLeft: 8 }}
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => updateMaxPrice(Number(e.target.value))}
            />
          </div>
          <TextButton onClicked={props.onApplyClicked}>Apply</TextButton>
        </div>
      </div>
 {/* Categories */}
      <div
        style={{
          border: "1px solid black",
          padding: 12,
          borderRadius: 4,
          marginBottom: 20,
        }}
      >
       
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomText preset={"title"}>Categories</CustomText>
          <CustomImage
            onClick={() => setShowCategories(!showCategories)}
            style={{
              transform: `rotate(${showCategories ? "180deg" : "0deg"})`,
            }}
            src={ic_expand}
          />
        </div>
        <div
          style={{
            maxHeight: showCategories ? 1000 : 0,
            overflow: "hidden",
            transition: "500ms",
          }}
        >
          {props.categories?.map((item) => {
            return (
              <CategoryList
                onCategoryClick={()=> props.onCategoryClicked ? props.onCategoryClicked(item.id) : ''}
                onSubCategoryClick={(id:string) => props.onSubCategoryClicked ? props.onSubCategoryClicked(id) : ''}
                category={item}
                subCategories={listSubCategories.filter(
                  (subCate) => subCate.categoryID == item.id
                )}
              />
            );
          })}
        </div>
      </div>

{/* Stock status */}
      <div style={{ border: "1px solid black", padding: 12, borderRadius: 4 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomText preset={"title"}>Stock status</CustomText>
          <CustomImage
            onClick={() => setShowStockStatus(!showStockStatus)}
            style={{
              transform: `rotate(${showStockStatus ? "180deg" : "0deg"})`,
            }}
            src={ic_expand}
          />
        </div>
        <div
          style={{
            maxHeight: showStockStatus ? 500 : 0,
            overflow: "hidden",
            transition: "500ms",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>
              <input
                type="checkbox"
                name="availability"
                style={{ marginRight: 4 }}
                checked={showAvailable}
                onChange={(e)=> onAvailableChecked(e)}
                
              />
              Available
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceFilterOption;
