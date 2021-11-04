import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAvoidingView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { useSelector, useDispatch } from "react-redux";
import { resetError, setError } from "../redux/actions/actions";

import Alert from "../components/Alert";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //state variables for the password and errors used
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const error = useSelector((state) => state.error);

  const handleSignin = () => {
    if (email && password) {
      navigation.navigate("Home");
    } else {
      dispatch(
        setError({
          message: "No login credentials given",
          type: "danger",
          screen: "login",
        })
      );
      setTimeout(() => {
        dispatch(resetError());
      }, 5000);
    }
  };

  return (
    <SafeAreaView styles={{ flex: 1, position: "relative" }}>
      {error.type && (
        <Alert
          screen={error.screen}
          type={error.type}
          message={error.message}
        />
      )}
      <KeyboardAvoidingView behavior="padding">
        <StyledLogin>
          <StyledLoginText>
            <StyledLoginTextMain>Welcome</StyledLoginTextMain>
            <StyledLoginTextSub>To La Violette</StyledLoginTextSub>
          </StyledLoginText>
          <StyledLoginLogo source={require("../assets/logo.jpg")} />
          <StyledLoginFields>
            <StyledInputs
              type="username"
              placeholder="Username"
              onChange={(text) => setEmail(text)}
            />
            <StyledInputs
              type="password"
              placeholder="Password"
              onChange={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </StyledLoginFields>
          <StyledLoginBtns>
            <StyledButtons onPress={handleSignin}>
              <StyledButtonValue>Sign in</StyledButtonValue>
            </StyledButtons>
          </StyledLoginBtns>
        </StyledLogin>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const StyledLogin = styled.View`
  width: 90%;
  margin: 20% auto;
  justify-content: center;
  align-items: center;
`;

const StyledLoginLogo = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  margin-bottom: 20%;
`;

const StyledLoginText = styled.View`
  margin-bottom: 20%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledLoginTextMain = styled.Text`
  font-size: 20px;
  color: #a1a1a1;
`;

const StyledLoginTextSub = styled.Text`
  font-size: 30px;
`;

const StyledInputs = styled.TextInput`
  width: 80%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 5%;
  width: 250px;
`;

const StyledButtons = styled.TouchableOpacity`
  padding: 12px 100px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #4285f4;
`;

const StyledButtonValue = styled.Text`
  font-size: 18px;
  color: #fff;
`;

const StyledLoginFields = styled.View``;

const StyledLoginBtns = styled.View``;

export default Login;
