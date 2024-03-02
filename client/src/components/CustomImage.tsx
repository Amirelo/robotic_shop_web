import React from "react";
import { screenHeight } from "../utils/Utilities";

interface Props{
    src:string;
    alt?: string;
    width?: React.CSSProperties['width'];
    height?: React.CSSProperties['height'];
    marginBottom?: React.CSSProperties['marginBottom']
    preset?: keyof typeof presetStyles;

}

const CustomImage = (props:Props) => {
    return (
        <img style={{ 
            ...presetStyles[props.preset ?? 'icon'],
            objectFit:'cover',
            borderRadius: 4,
            marginBottom: props.marginBottom
        }} src={props.src} alt={props.alt} />
    )
}

export default CustomImage

const presetStyles: {[key:string]: React.CSSProperties} = {
    icon:{
        width:24,
        height:24
    },
    banner:{
        width: '40%',
    }
}