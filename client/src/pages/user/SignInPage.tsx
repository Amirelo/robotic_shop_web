import React from "react";
import { CustomText } from "../../components";
import { TextButton } from "../../components/buttons";

const SignInPage = () => {
    return (
        <div style={{...styles.body}}>
            <CustomText preset={'title'} marginBottom={20}>Sign In Page</CustomText>
            <input style={{...styles.input}} placeholder="Email" type="email"/>
            <input style={{...styles.input}} placeholder="Password" type="password"/>
            <TextButton style={{width:'30%'}}>Sign In</TextButton>
            <CustomText>Or sign in with</CustomText>
            <TextButton style={{width:'30%'}}>Google</TextButton>
        </div>
    )
}

export default SignInPage;

const styles:{[key:string]: React.CSSProperties} = {
    body:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    input:{
        width:'30%',
        height:40,
        flexDirection:'column',
        display:'flex',
        marginBottom:10
    }
}