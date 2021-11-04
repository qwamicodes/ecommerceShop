import React from "react";
import { Text, Image } from "react-native";
import styled from "styled-components/native";
import { primaryColor } from "../helpers/Variables";

const Product = ({ title, image, price, submit }) => {
  return (
    <StyledProduct onPress={submit}>
      <StyledProductImage>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: image }}
        />
      </StyledProductImage>
      <StyledProductName>
        <Text
          style={{
            color: `${primaryColor}`,
            fontFamily: "Zen-Regular",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          {title}
        </Text>
      </StyledProductName>
      <StyledProductPrice>
        <Text
          style={{
            color: `${primaryColor}`,
            fontFamily: "Zen-Regular",
            textAlign: "center",
            fontSize: 25,
            fontWeight: "500",
          }}
        >
          $ {price}
        </Text>
      </StyledProductPrice>
    </StyledProduct>
  );
};

const StyledProduct = styled.TouchableOpacity`
  background-color: #fff;
  width: 90%;
  height: 330px;
  border-radius: 10px;
  margin: 10px auto;
  overflow: hidden;
  padding: 0 5%;
`;

const StyledProductImage = styled.View`
  flex-basis: 60%;
  justify-content: center;
  align-items: center;
`;

const StyledProductName = styled.View`
  flex-basis: 25%;
  justify-content: center;
  align-items: center;
`;

const StyledProductPrice = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// const StyledProductRating = styled.View``;

export default Product;
