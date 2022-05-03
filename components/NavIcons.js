import { View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo, Feather } from "@expo/vector-icons";

const NavIcons = () => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 50,
        backgroundColor: COLORS.primary,
        minWidth: 300,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: SIZES.medium,
          paddingHorizontal: SIZES.extraLarge,
        }}
      >
        <TouchableOpacity>
          <Entypo name="grid" size={36} color={COLORS.gray} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="shopping-cart" size={36} color={COLORS.gray} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="minus-square" size={36} color={COLORS.gray} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={36} color={COLORS.gray} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavIcons;
