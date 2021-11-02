import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { primaryColorLight } from "../helpers/Variables";

const ProductDetails = ({ route, navigation }) => {
  const {
    retailPrice,
    title,
    media,
    name,
    year,
    releaseDate,
    colorway,
    brand,
    gender,
  } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledProductHeader>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Image
            style={{ width: 35, height: 35, borderRadius: 50, marginRight: 15 }}
            source={require("../assets/logo.jpg")}
          />
        </View>
      </StyledProductHeader>
      <StyledProductGender>
        <StyledProductGenderText gender={gender}>
          {gender}
        </StyledProductGenderText>
      </StyledProductGender>
      <StyledProductImage>
        <Image source={{ uri: media.imageUrl }} />
      </StyledProductImage>
      <StyledProductName>
        <Text>{title}</Text>
      </StyledProductName>
      <StyledProductSize>
        <Text></Text>
      </StyledProductSize>
      <StyledProductColor></StyledProductColor>
      <StyledProductPrice>
        <View style={{ flex: 0.5 }}>
          <Text>$ {retailPrice}</Text>
        </View>
        <View style={{ flex: 0.5, backgroundColor: "orange" }}></View>
      </StyledProductPrice>
    </SafeAreaView>
  );
};

const StyledProductHeader = styled.View`
  flex-direction: row;
  width: 60%;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  flex-basis: 10%;
`;

const StyledProductGender = styled.View`
  flex-direction: row;
  flex-basis: 8%;
  justify-content: center;
  align-items: center;
`;

const StyledProductGenderText = styled.Text`
  background-color: ${(props) =>
    props.gender === "men" ? primaryColorLight : "#ff93c9"};
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 16px;
  font-family: "Zen-Regular";
`;

const StyledProductImage = styled.View`
  flex-basis: 40%;
`;

const StyledProductName = styled.View`
  flex-basis: 10%;
`;

const StyledProductSize = styled.View`
  flex-basis: 10%;
`;

const StyledProductColor = styled.View`
  flex-basis: 10%;
`;

const StyledProductPrice = styled.View`
  flex-direction: row;
  flex: 1;
`;

export default ProductDetails;
