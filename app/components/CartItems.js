import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";

import { Feather } from "@expo/vector-icons";
import { primaryColor } from "../helpers/Variables";
import { updateCart } from "../redux/actions/actions";

const CartItems = ({ id, title, image, price, quant }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(quant);
  const [itemPrice, setItemPrice] = useState(price);

  const cart = useSelector((state) => state.cart);

  const changeQuantity = (type) => {
    type === "add"
      ? setQuantity(quantity + 1)
      : quantity === 1
      ? dispatch(updateCart(cart.filter((cartItem) => cartItem.id !== id)))
      : setQuantity(quantity - 1);
  };

  useEffect(() => {
    setItemPrice(price * quantity);

    cart.map((car) => {
      if (car.id === id) {
        car.quantity = quantity;
      }
    });
  }, [quantity]);

  return (
    <StyledCartItem>
      <View style={{ flexBasis: "30%" }}>
        <Image style={{ width: "100%", height: 70 }} source={{ uri: image }} />
      </View>
      <View style={{ flexBasis: "60%" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Zen-Regular",
              color: `${primaryColor}`,
            }}
          >
            {title}
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              textAlign: "left",
              fontFamily: "Zen-Regular",
              color: `${primaryColor}`,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            $ {itemPrice}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => changeQuantity("sub")}
          style={{ backgroundColor: "#f0f0f0", borderRadius: 50, padding: 1 }}
        >
          <Feather name="minus" size={18} color="black" />
        </TouchableOpacity>
        <Text>{quantity}</Text>
        <TouchableOpacity
          onPress={() => changeQuantity("add")}
          style={{ backgroundColor: "#f0f0f0", borderRadius: 50, padding: 1 }}
        >
          <Feather name="plus" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </StyledCartItem>
  );
};

const StyledCartItem = styled.View`
  flex-direction: row;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  padding: 15px;
`;

export default CartItems;
