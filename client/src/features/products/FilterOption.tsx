import React from "react";
import themes from "../../preferences/theme/themes";
import { CustomImage, CustomText } from "../../components";
import OptionBox from "./OptionBox";
import SearchBar from "./SearchBar";

interface Props {
  search: string;
  currentView: boolean;
  currentSort: string;
  currentItemPerPage: number;

  onViewChanged(isGrid: boolean): void;
  onSearchChange(text: string): void;
  onSortChange(text: string): void;
  onItemPerPageChange(num: number): void;
}

const FilterOption = (props: Props) => {
  return (
    <div style={styles.body}>
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 4,
          paddingInline: 12,
          paddingBlock: 8,
        }}
      >
        <CustomText>View as</CustomText>
        <CustomImage
          src={"/icons/ic_grid_view.svg"}
          preset={"box"}
          backgroundcolor={
            props.currentView ? themes["defaultTheme"].primary : ""
          }
          onClick={()=> props.onViewChanged(true)}
        />
        <CustomImage
          src={"/icons/ic_list.svg"}
          preset={"box"}
          backgroundcolor={
            !props.currentView ? themes["defaultTheme"].primary : ""
          }
          onClick={()=> props.onViewChanged(false)}
        />
      </div>

      <OptionBox
        title="Sort by"
        onChanged={(e) => props.onSortChange(e.target.value)}
      >
        <option value="Popularity">Popularity</option>
        <option value="Ratings">Ratings</option>
        <option value="Date">Date</option>
        <option value="Price: Low to high">Price: Low to high</option>
        <option value="Price: High to low">Price: High to low</option>
      </OptionBox>

      <OptionBox
        title="Show"
        onChanged={(e) => props.onItemPerPageChange(e.target?.value)}
      >
        <option value="12">12/pages</option>
        <option value="16">16/pages</option>
        <option value="20">20/pages</option>
      </OptionBox>
      <SearchBar />
    </div>
  );
};

export default FilterOption;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    display: "flex",
    justifyContent: "space-between",
    paddingBlock: 12,
    paddingInline: 8,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: themes["defaultTheme"].primary,
  },
};
