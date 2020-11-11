import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/searchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsPanel from "../components/resultsPanel";

const searchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useRestaurants();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.resultStyle}>{errorMessage}</Text>
      ) : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsPanel
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsPanel
          title="Bit Pricier"
          results={filterResultsByPrice("$$")}
        />
        <ResultsPanel
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  resultStyle: {
    marginVertical: 5,
    alignSelf: "center",
  },
});

export default searchScreen;
