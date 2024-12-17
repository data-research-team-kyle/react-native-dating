import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

import { COLORS, SIZES, icons } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

interface ProductCardProps {
  name: string;
  image: any; // Use 'require' for local images or 'ImageSourcePropType' for more robust typing
  numSolds: number;
  price: string;
  rating: number;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, numSolds, price, rating, onPress }) => {
  const { dark } = useTheme();
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: dark ? COLORS.dark3 : COLORS.silver }]}>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
      flexDirection: "column",
      width: (SIZES.width - 32) / 2 - 12,
      backgroundColor: COLORS.white,
      padding: 6,
      borderRadius: 16,
      marginBottom: 12,
      marginRight: 4
  },
  imageContainer: {
      width: "100%",
      height: 140,
      borderRadius: 16,
      backgroundColor: COLORS.silver
  },
  image: {
      width: "100%",
      height: 140,
      borderRadius: 16
  },
  name: {
      fontSize: 18,
      fontFamily: "bold",
      color: COLORS.greyscale900,
      marginVertical: 4
  },
  location: {
      fontSize: 12,
      fontFamily: "regular",
      color: COLORS.grayscale700,
      marginVertical: 4
  },
  bottomPriceContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4
  },
  priceContainer: {
      flexDirection: "row",
      alignItems: "center"
  },
  price: {
      fontSize: 18,
      fontFamily: "bold",
      color: COLORS.primary,
      marginRight: 8
  },
  heartIcon: {
      width: 16,
      height: 16,
      tintColor: COLORS.white,
  },
  favouriteContainer: {
      position: "absolute",
      top: 16,
      right: 16,
      width: 28,
      height: 28,
      borderRadius: 9999,
      backgroundColor: COLORS.primary,
      zIndex: 999,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
  },
  viewContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 4,
      marginBottom: 6
  },
  soldContainer: {
      width: 66,
      height: 24,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      backgroundColor: COLORS.silver
  },
  soldText: {
      fontSize: 12,
      fontFamily: "medium",
      color: COLORS.grayscale700,
      marginVertical: 4
  }
});

export default ProductCard;
