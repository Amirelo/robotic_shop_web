// React and libs
import React from "react";

// Components
import CustomText from "./CustomText";

// Properties
interface Props {
  title?: string;
  list: Array<any>;
  width?: number;
  marginBottom?: React.CSSProperties["marginBottom"];
  render(data: any): any;
  onSeeMoreClicked?(): void;
}

const CustomList = (props: Props) => {
  const curWdith = props.width + "px";
  console.log(curWdith);
  return (
    <div style={{ marginBottom: props.marginBottom }}>
      {props.title ? (
        // Header
        <div style={{ ...styles.title }}>
          {/* Title */}
          <CustomText preset={"title"} marginBottom={8}>
            {props.title + ""}
          </CustomText>
          {/* Button - See more */}
          <CustomText
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={props.onSeeMoreClicked}
          >
            See more
          </CustomText>
        </div>
      ) : (
        <></>
      )}
      {/* List */}
      <div
        style={{
          ...styles.items,
          gridTemplateColumns: `repeat(auto-fill, ${
            props.width ? curWdith : 240 + "px"
          })`,
        }}
      >
        {props.list.map((data) => props.render(data))}
      </div>
    </div>
  );
};

export default CustomList;

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  items: {
    display: "grid",
    gap: 16,
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
};
