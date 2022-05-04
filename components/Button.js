import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.CircleButtonContainer, ...SHADOWS.light, ...props }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={styles.CircleButtonImage}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({
  minWidth,
  fontSize,
  icon,
  handlePress,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.RectButtonContainer,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={{ ...styles.RectButtonText, fontSize: fontSize }}>
        {children}
      </Text>
      <View>{icon}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CircleButtonContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
  },
  CircleButtonImage: {
    width: 24,
    height: 24,
  },
  RectButtonContainer: {
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
  RectButtonText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    textAlign: "center",
  },
});
