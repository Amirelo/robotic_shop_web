// React and libs
import React from "react";

// Assets
import { ic_filter_alt, ic_grid_view, ic_list_view } from "../../assets/icons";

// Components
import { CustomImage, CustomText, OptionBox } from "../../components";
import SearchBar from "./SearchBar";

// User Preferences
import themes from "../../preferences/theme/themes";
import { SORT_POPULAR, SORT_PRICE_HL, SORT_PRICE_LH, SORT_RATING } from "../../constants/AppConstant";

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
    <div style={{ marginBottom: 20 }}>
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
            src={ic_grid_view}
            preset={"box"}
            backgroundcolor={
              props.currentView ? themes["defaultTheme"].primary : "white"
            }
            onClick={() => props.onViewChanged(true)}
          />
          <CustomImage
            src={ic_list_view}
            preset={"box"}
            backgroundcolor={
              !props.currentView ? themes["defaultTheme"].primary : "white"
            }
            onClick={() => props.onViewChanged(false)}
          />
        </div>

        <OptionBox
          title="Sort by"
          onChanged={(e) => props.onSortChange(e.target.value)}
        >
          <option value={SORT_POPULAR}>Popularity</option>
          <option value={SORT_RATING}>Ratings</option>
          <option value={SORT_PRICE_LH}>Price: Low to high</option>
          <option value={SORT_PRICE_HL}>Price: High to low</option>
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: "fit-content",
        }}
      >
        <CustomImage src={ic_filter_alt} />
        <CustomText>Advance search</CustomText>
      </div>
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
    marginBottom: 4,
    alignItems: "center",
    backgroundColor: themes["defaultTheme"].primary,
  },
};
