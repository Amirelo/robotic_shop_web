// React and libs
import React from "react";

// Components
import CustomText from "./CustomText";

interface Props {
  title?: string;
  list: Array<any>;
  width?: number;
  render(data: any): any;
  onSeeMoreClicked?(): void;
  marginBottom?: React.CSSProperties["marginBottom"];
}

const CustomList = (props: Props) => {
  const curWdith = props.width + "px";
  console.log(curWdith);
  return (
    <div style={{marginBottom: props.marginBottom}}>
      {props.title ? (
        <div style={{ ...styles.title }}>
          <CustomText preset={"title"} marginBottom={8}>
            {props.title + ""}
          </CustomText>
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
