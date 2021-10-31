import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const CategoryContainer = ({ name }) => {
  return (
    <StyledCateg>
      <Text style={{ fontSize: 18, fontFamily: "Zen-Regular" }}>{name}</Text>
    </StyledCateg>
  );
};

const StyledCateg = styled.View`
  background-color: #fff;
  flex-direction: row;
  padding: 10px 20px;
  border-radius: 10px;
`;

export default CategoryContainer;
