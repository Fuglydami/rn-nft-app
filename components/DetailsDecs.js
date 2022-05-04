import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, FONTS, SIZES } from "../constants";

const DetailsDecs = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.large}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={styles.detailsContainer}>Description</Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={styles.textContainer}>
            {text}
            {!readMore && "..."}
            <Text
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
              style={styles.sliceDescription}
            >
              {readMore ? "Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsContainer: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  textContainer: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: SIZES.large,
  },
  sliceDescription: {
    fontSize: SIZES.small,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});

export default DetailsDecs;
