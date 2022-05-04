import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTcard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={{ ...styles.container, ...SHADOWS.dark }}>
      <View style={styles.imageContainer}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={styles.cardDetailsContainer}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSie={SIZES.small}
        />
        <View style={styles.cardDetails}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            padding={SIZES.small}
            handlePress={() => navigation.navigate("Details", { data })}
          >
            Place a bid
          </RectButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
  },
  imageContainer: {
    width: "100%",
    height: 250,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  cardDetails: {
    marginTop: SIZES.font,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardDetailsContainer: {
    width: "100%",
    padding: SIZES.font,
  },
});

export default NFTcard;
