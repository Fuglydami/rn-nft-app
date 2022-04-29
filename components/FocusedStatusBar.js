import { View, Text } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";
import { StatusBar } from "react-native-web";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
