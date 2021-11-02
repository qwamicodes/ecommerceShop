import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import uuid from "react-native-uuid";
import axios from "axios";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CategoryContainer from "../components/CategoryContainer";
import Product from "../components/Product";
import { primaryColorDark } from "../helpers/Variables";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
      params: { limit: 20 },
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "d3456c96a9mshb62066b1e421ea0p1749acjsna406b9a86a1f",
      },
    };

    //setting the products data back from the api to the products state
    axios
      .request(options)
      .then((data) => setProducts(data.data.results))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StyledHomeHeader>
        <TouchableOpacity onPress={() => setToggleMenu(!toggleMenu)}>
          <Ionicons name="md-menu-outline" size={24} color="black" />
        </TouchableOpacity>
        <StyledHomeLogo source={require("../assets/logo.jpg")} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: 80,
          }}
        >
          <TouchableOpacity>
            <Feather name="settings" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="shopping-bag" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </StyledHomeHeader>
      <StyledHomeHeading>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Zen-Bold",
            color: `${primaryColorDark}`,
            marginLeft: 20,
          }}
        >
          Our Products
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "grey" }}>Sort by</Text>
          <Entypo name="chevron-small-down" size={24} color="grey" />
        </View>
      </StyledHomeHeading>
      <StyledHomeCateg>
        {["Adidas", "Nike", "Jordan"].map((brand) => (
          <CategoryContainer name={brand} key={uuid.v4()} />
        ))}
      </StyledHomeCateg>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          height: "100%",
          marginHorizontal: "auto",
        }}
      >
        {products &&
          products.map((product) => (
            <Product
              submit={() =>
                navigation.navigate("ProductDetails", { ...product })
              }
              key={uuid.v4()}
              image={product.media.imageUrl}
              title={product.title}
              price={product.retailPrice}
            />
          ))}
      </ScrollView>
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
  margin-left: 50px;
`;

const StyledHomeHeading = styled.View`
  flex-basis: 5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledHomeCateg = styled.View`
  flex-basis: 8%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default Home;
