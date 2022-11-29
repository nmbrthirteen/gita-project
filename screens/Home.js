import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Villa from "../layout/Villa";
import { Villa_API } from "../api/data";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={Villa_API}
        renderItem={({ item }) => (
          <Villa
            item={item}
            handleMore={(id) => (
              navigation.navigate("Details", {
                name: "Details",
                itemId: item.id,
                price: item.price,
              }),
              console.log("hadlemore" + " " + item.id)
            )}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {/*
        Villa_API.map((item,index) => (
           <Villa
              key={index} 
              id={item.id}
              image={item.image}
              description={item.description}
              price={item.price}
              location={item.location}
              />
        ))
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
