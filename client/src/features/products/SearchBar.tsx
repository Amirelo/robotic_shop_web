// React and libs
import React from "react";

// Components
import { CustomImage } from "../../components";

// User Preferences
import themes from "../../preferences/theme/themes";

// Icons
import { ic_search } from "../../assets/icons";

// Properties
interface Props {
  onChangedText?(text: string): void;
}

const SearchBar = (props: Props) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={styles.body}>
      {/* Input */}
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) =>
          props.onChangedText ? props.onChangedText(e.target.value) : ""
        }
        style={styles.input}
      />
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...styles.image_box,
          backgroundColor: hover ? themes["defaultTheme"].primary_hover : "",
        }}
      >
        {/* Icon */}
        <CustomImage src={ic_search} />
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
    backgroundColor: themes["defaultTheme"].background,
  },
  input: {
    height: "100%",
    flex: 1,
    border: "none",
    paddingLeft: 20,
  },
  image_box: {
    width: 56,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderLeft: "1px solid black",
    transition: "500ms",
  },
};
