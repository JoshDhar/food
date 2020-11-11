import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import yelp from "../api/yelp";

const singleResultScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const result = await yelp.get(`/${id}`);
    setResult(result.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.textStyle}>{result.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  imageStyle: {
    height: 200,
    width: 200,
    borderRadius: 25,
    marginBottom: 10,
    alignSelf: "center",
  },
});

export default singleResultScreen;
