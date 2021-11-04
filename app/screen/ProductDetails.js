import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, Image } from "react-native";
import {
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  secoondaryColor,
  secoondaryColorDark,
} from "../helpers/Variables";

import { addCart, resetError, setError } from "../redux/actions/actions";
import Alert from "../components/Alert";

const ProductDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { retailPrice, title, media, year, brand, gender } = route.params;
  const [size, setSize] = useState();
  const [color, setColor] = useState();

  //getting state from redux store
  const cart = useSelector((state) => state.cart);
  const error = useSelector((state) => state.error);

  //function to submit the selection to the cart
  const handleAddtoCart = () => {
    if (!(size && color)) {
      dispatch(
        setError({
          message: "Select properties",
          type: "danger",
          screen: "product",
        })
      );

      setTimeout(() => {
        dispatch(resetError());
      }, 5000);

      return;
    }

    dispatch(addCart({ title, size, color, ...media, retailPrice }));
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}
    >
      {error.message && <Alert message={error.message} type={error.type} />}
      <StyledProductHeader>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Image
            style={{ width: 35, height: 35, borderRadius: 50 }}
            source={require("../assets/logo.jpg")}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Feather
            style={{ position: "relative" }}
            name="shopping-bag"
            size={24}
            color="black"
          />
          <View
            style={{
              backgroundColor: `${primaryColorLight}`,
              borderRadius: 50,
              position: "absolute",
              padding: 2,
              width: 20,
              height: 20,
              top: -10,
              right: -8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: `${primaryColorDark}` }}>{cart.length}</Text>
          </View>
        </TouchableOpacity>
      </StyledProductHeader>
      <StyledProductGender>
        <StyledProductGenderText gender={gender}>
          {gender}
        </StyledProductGenderText>
      </StyledProductGender>
      <StyledProductImage>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: `${media.imageUrl}` }}
        />
      </StyledProductImage>
      <StyledProductName>
        <Text
          style={{
            fontFamily: "Zen-Regular",
            fontSize: 22,
            color: `${primaryColor}`,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        <Text style={{ color: "grey", fontSize: 16 }}>
          {brand} | {year}
        </Text>
      </StyledProductName>
      <StyledProductSize>
        <Text
          style={{ fontFamily: "Zen-Regular", fontSize: 18, color: "grey" }}
        >
          Size:
        </Text>
        <StyledProductSizeContainer
          active={size === 6}
          onPress={() => setSize(6)}
        >
          <Text>US 6</Text>
        </StyledProductSizeContainer>
        <StyledProductSizeContainer
          active={size === 7}
          onPress={() => setSize(7)}
        >
          <Text>US 7</Text>
        </StyledProductSizeContainer>
        <StyledProductSizeContainer
          active={size === 8}
          onPress={() => setSize(8)}
        >
          <Text>US 8</Text>
        </StyledProductSizeContainer>
        <StyledProductSizeContainer
          active={size === 9}
          onPress={() => setSize(9)}
        >
          <Text>US 9</Text>
        </StyledProductSizeContainer>
      </StyledProductSize>
      <StyledProductColors>
        <Text
          style={{ fontFamily: "Zen-Regular", fontSize: 18, color: "grey" }}
        >
          Available Colors:
        </Text>
        <StyledProductColor
          color="#271"
          active={color === "#271"}
          onPress={() => setColor("#271")}
        ></StyledProductColor>
        <StyledProductColor
          color="#d21"
          active={color === "#d21"}
          onPress={() => setColor("#d21")}
        ></StyledProductColor>
        <StyledProductColor
          color="#de2"
          active={color === "#de2"}
          onPress={() => setColor("#de2")}
        ></StyledProductColor>
        <StyledProductColor
          color="#2711ee"
          active={color === "#2711ee"}
          onPress={() => setColor("#2711ee")}
        ></StyledProductColor>
      </StyledProductColors>
      <StyledProductPrice>
        <View
          style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontFamily: "Zen-Regular",
              fontSize: 28,
              fontWeight: "700",
            }}
          >
            $ {retailPrice}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleAddtoCart}
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: `${
              gender === "men" ? primaryColorLight : secoondaryColor
            }`,
          }}
        >
          <MaterialCommunityIcons
            name="cart-outline"
            size={24}
            color={gender === "men" ? primaryColorDark : secoondaryColorDark}
          />
          <Text
            style={{
              fontFamily: "Zen-Regular",
              fontSize: 20,
              color: `${gender === "men" ? primaryColorDark : "black"}`,
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </StyledProductPrice>
    </SafeAreaView>
  );
};

const StyledProductHeader = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 20px;
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
    props.gender === "men" ? primaryColorLight : secoondaryColor};
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 16px;
  font-family: "Zen-Regular";
`;

const StyledProductImage = styled.View`
  flex-basis: 40%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledProductName = styled.View`
  flex-basis: 10%;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const StyledProductSize = styled.View`
  flex-basis: 10%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledProductSizeContainer = styled.TouchableOpacity`
  padding: 10px 15px;
  background-color: ${(props) => (props.active ? primaryColorLight : "#fff")};
  border-radius: 10px;
`;

const StyledProductColors = styled.View`
  flex-basis: 10%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledProductColor = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  border: ${(props) =>
    props.active ? "2px solid black" : "2px solid transparent"};
`;

const StyledProductPrice = styled.View`
  flex-direction: row;
  flex: 1;
`;

export default ProductDetails;
