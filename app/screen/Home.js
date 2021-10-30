import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import axios from "axios";

import CategoryContainer from "../components/CategoryContainer";

import { Ionicons, Feather, Entypo } from "@expo/vector-icons";

const Home = () => {
  const [products, setProducts] = useState();
  const [brands, setBrands] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://v1-sneakers.p.rapidapi.com/v1/brands",
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "d3456c96a9mshb62066b1e421ea0p1749acjsna406b9a86a1f",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setBrands(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StyledHomeHeader>
        <Ionicons name="md-menu-outline" size={24} color="black" />
        <StyledHomeLogo source={require("../assets/logo.jpg")} />
        <TouchableOpacity>
          <Feather name="shopping-bag" size={24} color="black" />
        </TouchableOpacity>
      </StyledHomeHeader>
      <StyledHomeHeading>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "Zen-Regular",
          }}
        >
          Our Products
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "grey" }}>Sort by</Text>
          <Entypo name="chevron-small-down" size={24} color="grey" />
        </View>
      </StyledHomeHeading>
      <StyledHomeCateg horizontal={true}>
        {brands && brands.map((brand) => <CategoryContainer name={brand} />)}
      </StyledHomeCateg>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#dfdfdf",
  },
});

const StyledHomeHeader = styled.View`
  flex-basis: 12%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledHomeLogo = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

const StyledHomeHeading = styled.View`
  flex-basis: 5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledHomeCateg = styled.ScrollView`
  flex-basis: 8%;
  flex-direction: row;
  height: 10px;
`;

export default Home;
