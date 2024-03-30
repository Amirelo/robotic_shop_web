// React and libs
import React from "react";
import { useNavigate } from "react-router-dom";

// Constants
import { ROUTE_SIGN_UP, ROUTE_UPDATE_INFO } from "../../constants/AppConstant";

// Components
import { CustomText } from "../../components";
import { TextButton } from "../../components/buttons";

const SignInPage = () => {
  const navigation = useNavigate();
  const onSignUpClicked = () => {
    navigation(ROUTE_SIGN_UP);
  };

  const onForgotPasswordClicked = () => {
    navigation(ROUTE_UPDATE_INFO);
  };
  return (
    <div style={{ ...styles.body }}>
      <CustomText preset={"title"} marginBottom={20}>
        Sign In Page
      </CustomText>
      <input
        style={{ ...styles.input }}
        placeholder="Email"
        type="email"
        required
      />
      <input
        style={{ ...styles.input }}
        placeholder="Password"
        type="password"
        required
      />
      <TextButton marginBottom={10}>Sign In</TextButton>
      <TextButton
        style={{  textDecoration: "underline", alignSelf:'flex-end' }}
        isTertiary
        width={'30%'}
        onClicked={onForgotPasswordClicked}
      >
        Forgot Password
      </TextButton>
      <CustomText marginBottom={10}>Or sign in with</CustomText>
      <TextButton marginBottom={10}>
        Google
      </TextButton>
      <TextButton
        onClicked={onSignUpClicked}
        isTertiary
      >
        Create an account
      </TextButton>
    </div>
  );
};

export default SignInPage;

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width:'30%',
    margin:'auto'
  },
  input: {
    width: "100%",
    height: 40,
    flexDirection: "column",
    display: "flex",
    marginBottom: 10,
  },
};
