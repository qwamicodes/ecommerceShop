import React from "react";

//import for the setting up of screen navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//imports to handle fonts from expo fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// screen imports from ./screen
import Login from "./app/screen/Login";
import Home from "./app/screen/Home";

export default function App() {
  const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts({
    "Zen-Bold": require("./app/assets/fonts/Zen-Bold.ttf"),
    "Zen-Regular": require("./app/assets/fonts/Zen-Regular.ttf"),
    "Zen-Light": require("./app/assets/fonts/Zen-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
