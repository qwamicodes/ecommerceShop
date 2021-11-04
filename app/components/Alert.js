import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import {
  primaryColorDark,
  primaryColorLight,
  secoondaryColorDark,
  secoondaryColorLight,
} from "../helpers/Variables";

const Alert = ({ message, type }) => {
  return (
    <StyledAlert type={type}>
      <StyledAlertText type={type}>{message}</StyledAlertText>
    </StyledAlert>
  );
};

const StyledAlert = styled.View`
  position: absolute;
  padding: 10px 20px;
  border-radius: 10px;
  bottom: 0;
  left: 20%;
  background-color: ${(props) =>
    props.type === "danger" ? secoondaryColorLight : primaryColorLight};
`;

const StyledAlertText = styled.Text`
  color: ${(props) =>
    props.type === "danger" ? secoondaryColorDark : primaryColorDark};
  font-size: 18px;
  font-family: "Zen-Regular";
`;

export default Alert;
