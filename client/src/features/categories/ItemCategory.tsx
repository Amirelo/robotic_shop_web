import React from "react"
import { CustomImage, CustomText } from "../../components"

const ItemCategory = () => {
    return (
<div
          style={styles.body}
        >
            <CustomImage preset={'fit'} src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg"/>
          
          
          <div style={styles.textFrame}>
            <CustomText>Robot Parts</CustomText>
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
        position: "absolute",
        bottom: 0,
        backgroundImage:
          "linear-gradient(to top,gold 20%, rgba(255,0,0,0))",
    }
}