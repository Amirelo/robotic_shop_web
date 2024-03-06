import React from "react";
import { CustomText } from "../../components";

interface Props{
    children: any;
    title: string;
    onChanged(e:any): void
}

const OptionBox = (props:Props) => {
  return (
    <div style={styles.body}>
      <CustomText style={{ paddingRight: 4 }}>{props.title}</CustomText>
      <select style={{ all: "unset" }} onChange={(e:any)=>props.onChanged(e)}>
       {props.children}
      </select>
    </div>
  );
};

export default OptionBox;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    display: "flex",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: 4,
    width: "fit-content",
    paddingInline: 12,
    paddingBlock: 4,
    overflow: "hidden",
  },
};
