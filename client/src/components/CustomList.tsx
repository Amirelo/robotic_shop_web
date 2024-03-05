import React from "react";
import CustomText from "./CustomText";

interface Props {
  title?: string;
  list: Array<any>;
  render(data: any): any;
}

const CustomList = (props: Props) => {
  return (
    <div>
      {props.title ? (
        <div style={styles.title}>
          <CustomText preset={"title"} marginBottom={8}>
            {props.title + ""}
          </CustomText>
          <CustomText>See more</CustomText>
        </div>
      ) : (
        <></>
      )}
      <div style={styles.items}>
        {props.list.map((data) => props.render(data))}
      </div>
    </div>
  );
};

export default CustomList;

const styles: { [key: string]: React.CSSProperties } = {
  items: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
    marginBottom: 40,
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
};
