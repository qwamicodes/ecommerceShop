import { Platform, StatusBar } from "react-native";

export const statusBarConfig = {
  flex: 1,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  backgroundColor: "#fff",
};

export const primaryColorDark = "#00074b";
export const primaryColor = "#000e8d";
export const primaryColorLight = "#add8e6";

export const secoondaryColorLight = "#ffb8dc";
export const secoondaryColor = "#ff93c9";
export const secoondaryColorDark = "#6b0036";
