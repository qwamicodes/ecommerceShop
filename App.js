import React from "react";

//importing React redux packages
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//import for the setting up of screen navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//imports to handle fonts from expo fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// screen imports from ./screen
import Login from "./app/screen/Login";
import Home from "./app/screen/Home";
import ProductDetails from "./app/screen/ProductDetails";

import allReducers from "./app/redux/store";
import Cart from "./app/screen/Cart";

export default function App() {
  const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts({
    "Zen-Bold": require("./app/assets/fonts/Zen-Bold.ttf"),
    "Zen-Regular": require("./app/assets/fonts/Zen-Regular.ttf"),
    "Zen-Light": require("./app/assets/fonts/Zen-Light.ttf"),
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(thunk))
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
