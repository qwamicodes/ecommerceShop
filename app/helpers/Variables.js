import { Platform, StatusBar } from "react-native";

export const statusBarConfig = {
  flex: 1,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  backgroundColor: "#fff",
};

export const primaryColorDark = "#00074b";
export const primaryColor = "#000e8d";
