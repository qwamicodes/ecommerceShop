import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const CategoryContainer = ({ name }) => {
  return (
    <StyledCateg>
      <Text>{name}</Text>
    </StyledCateg>
  );
};

const StyledCateg = styled.View`
  background-color: #fff;
  flex-direction: row;
`;

export default CategoryContainer;
