import React from "react";
import { CustomText } from "../../components";
import { TextButton } from "../../components/buttons";
import { useNavigate } from "react-router-dom";
import { ROUTE_SIGN_IN, ROUTE_SIGN_UP, ROUTE_UPDATE_INFO } from "../../constants/AppConstant";

const SignUpPage = () => {
    const navigation = useNavigate()
    const onSignInClicked = () => {
        navigation(ROUTE_SIGN_IN)
    }
return(
    <div style={{...styles.body}}>
        <CustomText preset={'title'} marginBottom={20}>Sign In Page</CustomText>
            <input style={{...styles.input}} placeholder="Email" type="email" />
            <input style={{...styles.input}} placeholder="Password" type="password" />
            <input style={{...styles.input}} placeholder="Confirm Password" type="password" />
            <TextButton style={{width:'30%'}}>Sign Up</TextButton>
            <CustomText marginBottom={10}>Or sign In with</CustomText>
            <TextButton style={{width:'30%'}} marginBottom={10}>Google</TextButton>
            <TextButton style={{width:'30%', backgroundColor:'#00000000'}} onClicked={onSignInClicked}>Back to Sign In</TextButton>
    </div>
)
}

export default SignUpPage

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