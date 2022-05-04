import { View, Text, Image, StyleSheet } from "react-native";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={{ ...styles.NFTTitleTitle, fontSize: titleSize }}>
        {title}
      </Text>
      <Text style={{ ...styles.NFTTitleSubTitle, fontSize: subTitleSize }}>
        {subTitle}
      </Text>
    </View>
  );
};
export const EthPrice = ({ price }) => {
  return (
    <View style={styles.EthPriceContainer}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={styles.EthPriceImage}
      />
      <Text style={styles.EthPriceText}>{price}</Text>
    </View>
  );
};
export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        ...styles.ImageCmp,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};
export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};
export const EndDate = () => {
  return (
    <View
      style={{
        ...styles.EndDateContainer,
        ...SHADOWS.light,
      }}
    >
      <Text style={styles.EndDateTextTitle}>Ending in</Text>
      <Text style={styles.EndDateTime}>12h 30m</Text>
    </View>
  );
};
export const SubInfo = () => {
  return (
    <View style={styles.SubInfo}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  NFTTitleTitle: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  NFTTitleSubTitle: {
    fontFamily: FONTS.regular,
    color: COLORS.primary,
  },
  EthPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  EthPriceImage: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  EthPriceText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.primary,
  },
  ImageCmp: {
    width: 48,
    height: 48,
  },
  EndDateContainer: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    maxWidth: "50%",
  },
  EndDateTextTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  EndDateTime: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  SubInfo: {
    width: "100%",
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
