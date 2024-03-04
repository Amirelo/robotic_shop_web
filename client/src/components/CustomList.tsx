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
      <CustomText preset={"title"} marginBottom={8}>{props.title+''}</CustomText>
    <div style={styles.body}>
      {props.list.map((data) => props.render(data))}
    </div>
    </div>
  );
};

export default CustomList;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
    marginBottom: 40,
  },
};
