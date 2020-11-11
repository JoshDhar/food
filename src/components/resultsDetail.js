import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={{
          uri: result.image_url || "../../assets/adaptive-icon.png",
        }}
      />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.ratingStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 120,
    width: 120,
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: "bold",
    marginLeft: 15,
    width: 120,
    overflow: "hidden",
  },
  ratingStyle: {
    marginLeft: 15,
  },
});

export default ResultsDetail;
