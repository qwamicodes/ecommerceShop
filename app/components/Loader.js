import React from "react";
import { Text, View } from "react-native";

const Loader = () => {
  return (
    <View
      style={{
        flexBasis: "70%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Loading...</Text>
    </View>
  );
};

export default Loader;
