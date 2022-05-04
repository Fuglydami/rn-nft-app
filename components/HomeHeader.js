import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES, assets, FONTS } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={assets.logo} style={styles.logo} />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={styles.avatar}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={styles.verifiedImage}
          />
        </View>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerSmallText}>Hello, Victoria 👋</Text>
        <Text style={styles.headerBigText}>Let's find a masterpiece</Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View style={styles.inputContainer}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search NFTs"
            style={styles.textInput}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },
  textInput: {
    flex: 1,
  },
  headerTextContainer: {
    marginVertical: SIZES.font,
  },
  headerSmallText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  headerBigText: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
  logo: {
    width: 90,
    height: 25,
  },
  verifiedImage: {
    position: "absolute",
    width: 15,
    height: 15,
    bottom: 0,
    right: 0,
  },
});

export default HomeHeader;
