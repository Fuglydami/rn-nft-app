import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice } from "./SubInfo";

const DetailsBid = ({ bid }) => {
  return (
    <View style={styles.container}>
      <Image source={bid.image} resizeMode="contain" style={styles.image} />
      <View>
        <Text style={styles.bidName}>Bid placed by {bid.name}</Text>
        <Text style={styles.bidDate}>{bid.date}</Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.base * 2,
    marginVertical: SIZES.base,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 48,
    height: 48,
  },
  bidName: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  bidDate: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
  },
});

export default DetailsBid;
