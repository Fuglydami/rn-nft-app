import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { COLORS, NFTData, SHADOWS, SIZES } from "../constants";
import {
  HomeHeader,
  NFTCard,
  FocusedStatusBar,
  RectButton,
  NavIcons,
} from "../components";
import { PrivateValueStore } from "@react-navigation/native";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!PrivateValueStore.length) setNftData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={styles.navContainer}>
        <NavIcons />
      </View>

      <View style={styles.listContainer}>
        <View style={styles.list}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View style={styles.backgroundContainer}>
          <View style={styles.darkBackground} />
          <View style={styles.whiteBackground} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  navContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 1,
  },
  listContainer: {
    flex: 1,
  },
  list: {
    zIndex: 0,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  darkBackground: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Home;
