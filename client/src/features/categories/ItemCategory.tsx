import React from "react"
import { CustomImage, CustomText } from "../../components"
import { CategoryModel } from "../../models";

interface Props{
    marginBottom?: React.CSSProperties['marginBottom'];
    data: CategoryModel
}

const ItemCategory = (props:Props) => {
    return (
<div
          style={styles.body}
        >
            <CustomImage preset={'fit'} src={props.data.image}/>
          
          
          <div style={styles.textFrame}>
            <CustomText preset={'title'}>{props.data.name}</CustomText>
          </div>
        </div>
    )
}

export default ItemCategory

const styles: {[key:string]: React.CSSProperties} = {
    body:{
        width: 200,
        height: 250,
        display: "flex",
        position: "relative",
        textAlign: "center",
        borderRadius: 20,
        overflow: "hidden",
    },
    textFrame:{
        width: "100%",
        height:'20%',
        position: "absolute",
        bottom: 0,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundImage:
          "linear-gradient(to top,gold 20%, rgba(255,0,0,0))",
    }
}