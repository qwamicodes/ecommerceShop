import React from "react";
import { Text, Image } from "react-native";
import styled from "styled-components/native";

const Product = ({ title, image, price }) => {
  return (
    <StyledProduct>
      <StyledProductImage>
        <Image style={{ width: 50, height: 50 }} source={{ uri: image }} />
      </StyledProductImage>
      <StyledProductName>
        <Text>{title}</Text>
      </StyledProductName>
      <StyledProductPrice>
        <Text>$</Text>
        <Text>{price}</Text>
      </StyledProductPrice>
    </StyledProduct>
  );
};

const StyledProduct = styled.TouchableOpacity`
  background-color: #fff;
  width: 45%;
  border-radius: 20px;
  margin: 10px;
`;
const StyledProductImage = styled.View``;
const StyledProductName = styled.View``;
const StyledProductPrice = styled.View``;
// const StyledProductRating = styled.View``;

export default Product;
