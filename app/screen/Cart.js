import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";

import { useDispatch, useSelector } from "react-redux";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { resetCart, updateTotal } from "../redux/actions/actions";
import CartItems from "../components/CartItems";

import {
  primaryColor,
  primaryColorLight,
  primaryColorDark,
} from "../helpers/Variables";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const amount = useSelector((state) => state.amount);

  // setTax(0.05 * subtotal);
  // setTotal(subtotal + tax);

  // useEffect(() => {
  //   cart.map((car) =>
  //     setSubtotal((total) => total + car.quantity * car.retailPrice)
  //   );
  // }, [subtotal]);

  // dispatch(updateTotal({ subtotal, tax, total }));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
      <StyledCartHeader>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Image
            style={{ width: 35, height: 35, borderRadius: 50 }}
            source={require("../assets/logo.jpg")}
          />
        </View>
        <TouchableOpacity onPress={() => dispatch(resetCart())}>
          <MaterialIcons name="delete-outline" size={24} color="black" />
        </TouchableOpacity>
      </StyledCartHeader>
      {cart.length > 0 ? (
        <View style={{ flex: 1 }}>
          <ScrollView
            style={{
              flexBasis: "55%",
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              overflow: "hidden",
            }}
          >
            {cart &&
              cart.map((car) => (
                <CartItems
                  id={car.id}
                  key={uuid.v4()}
                  image={car.thumbUrl}
                  price={car.retailPrice}
                  title={car.title}
                  quant={car.quantity}
                />
              ))}
          </ScrollView>
          <StyledCartAmount>
            <View
              style={{
                flex: 0.5,
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Zen-Regular",
                  fontSize: 16,
                  color: "grey",
                }}
              >
                Subtotal:
              </Text>
              <Text
                style={{
                  fontFamily: "Zen-Regular",
                  fontSize: 22,
                }}
              >
                $ {subtotal}
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Zen-Regular",
                  fontSize: 16,
                  color: "grey",
                }}
              >
                Taxes:
              </Text>
              <Text
                style={{
                  fontFamily: "Zen-Regular",
                  fontSize: 22,
                }}
              >
                ${tax}
              </Text>
            </View>
          </StyledCartAmount>
          <StyledCartCheckout>
            <View
              style={{
                flexBasis: "50%",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: `${primaryColor}`,
                    fontSize: 18,
                  }}
                >
                  $
                </Text>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: `${primaryColor}`,
                    fontFamily: "Zen-Regular",
                  }}
                >
                  {total}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  backgroundColor: `${primaryColorLight}`,
                  padding: 15,
                  borderRadius: 30,
                  width: "75%",
                }}
              >
                <Ionicons
                  name="log-out-outline"
                  size={24}
                  color={primaryColorDark}
                />
                <Text style={{ color: primaryColorDark, fontSize: 17 }}>
                  Check Out
                </Text>
              </TouchableOpacity>
            </View>
          </StyledCartCheckout>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontFamily: "Zen-Regular" }}>
            Nothing in cart
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const StyledCartHeader = styled.View`
  flex-direction: row;
  flex-basis: 10%;
  width: 100%;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  background-color: #fff;
`;

const StyledCartAmount = styled.View`
  flex-basis: 12%;
  background-color: #f0f0f0;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
`;

const StyledCartCheckout = styled.View`
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  background-color: #fff;
  flex: 1;
  flex-direction: row;
`;

export default Cart;
