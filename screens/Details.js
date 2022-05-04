import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  FlatList,
  StyleSheet,
} from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SUbInfo,
  FocusedStatusBar,
  DetailsDecs,
  DetailsBid,
  SubInfo,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={styles.detailsHeaderContainer}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={styles.detailsHeaderImage}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        barStyle="dark-content"
        background="transparent"
        translucent={true}
      />
      <View style={styles.cardButtonContainer}>
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          padding={SIZES.small}
          {...SHADOWS.dark}
        >
          Place a bid
        </RectButton>
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={styles.detailsContainer}>
              <DetailsDecs data={data} />
              {data.bids.length > 0 && (
                <Text style={styles.detailsText}>Current Bids</Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsHeaderContainer: {
    width: "100%",
    height: 373,
  },
  detailsHeaderImage: {
    width: "100%",
    height: "100%",
  },
  detailsText: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  detailsContainer: {
    padding: SIZES.font,
  },
  cardButtonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 1,
  },
});

export default Details;
