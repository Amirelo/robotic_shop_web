import React, { HTMLInputTypeAttribute } from "react";

interface Props{
    placeholder?: string;
    inputType?: HTMLInputTypeAttribute
}

const CustomInput = (props:Props) => {
    <input
        style={{...props.inputType == 'checkbox' || props.inputType== 'radio' ? styles.field : ''}}
    placeholder={props.placeholder} type={props.inputType ?? 'text'}/>
}

const styles: {[key:string] : React.CSSProperties} = {
    field:{
        height:48,
        width: '50%',
        borderRadius:4
    }
}