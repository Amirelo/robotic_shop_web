// React and libs
import React from "react";
import { useNavigate } from "react-router-dom";

// Constants
import { ROUTE_SIGN_UP, ROUTE_UPDATE_INFO } from "../../constants/AppConstant";

// Components
import { CustomText } from "../../components";
import { TextButton } from "../../components/buttons";

const SignInPage = () => {
    const navigation = useNavigate()
    const onSignUpClicked = () => {
        navigation(ROUTE_SIGN_UP)
    }

    const onForgotPasswordClicked = () => {
        navigation(ROUTE_UPDATE_INFO)
    }
    return (
        <div style={{...styles.body}}>
            <CustomText preset={'title'} marginBottom={20}>Sign In Page</CustomText>
            <input style={{...styles.input}} placeholder="Email" type="email" required/>
            <input style={{...styles.input}} placeholder="Password" type="password" required/>
            <TextButton style={{width:'30%'}}>Sign In</TextButton>
            <TextButton style={{width:'30%', backgroundColor:'#00000000', textAlign:'end', textDecoration:'underline'}} onClicked={onForgotPasswordClicked}>Forgot Password</TextButton>
            <CustomText marginBottom={10}>Or sign in with</CustomText>
            <TextButton style={{width:'30%'}} marginBottom={10}>Google</TextButton>
            <TextButton style={{width:'30%', backgroundColor:'#00000000'}} onClicked={onSignUpClicked}>Create an account</TextButton>
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
        marginBottom:10,
    }
}