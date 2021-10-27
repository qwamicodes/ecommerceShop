import { Platform, StatusBar } from "react-native";

export const statusBarConfig = {
  flex: 1,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  backgroundColor: "#fff",
};
