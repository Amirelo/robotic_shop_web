// React and libs
import React from "react";

// Components
import { CustomImage } from "../../components";
import themes from "../../preferences/theme/themes";

const SearchBar = () => {
  return (
    <div style={styles.body}>
      <input type="text" placeholder="Search.." style={styles.input} />
      <div style={styles.image_box}>
        <CustomImage src="/icons/ic_search.svg"/>
      </div>
    </div>
  );
};

export default SearchBar;

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  body: {
    height: 56,
    borderRadius: 4,
    border: "1px solid black",
    overflow: "hidden",
    width: "30%",
    display: "flex",
    alignItems: "center",
  },
  input: {
    height: '100%',
    flex: 1,
    border: "none",
    paddingLeft: 20,
  },
  image_box: {
    width: 56,
    height: 56,
    backgroundColor: themes['defaultTheme'].primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor:'pointer'
  },
};
