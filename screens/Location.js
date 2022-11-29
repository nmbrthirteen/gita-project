import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";
import { Villa_API } from "../api/data";
import AuthContext from "../context/ContextApi";
var data = [];
export const FilteredData = ({ item, handleItem }) => {
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={(id) => handleItem({ item })}
          style={{ width: "100%" }}
        >
          <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NotFound = () => {
  return (
    <View
      style={{
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontFamily: "Montserrat_700Bold",
      }}
    >
      <Text style={{ fontSize: 32 }}>Nothing was found!</Text>
    </View>
  );
};

export const Location = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const { searchText } = useContext(AuthContext);
  const handleItem = ({ item }) => {
    navigation.navigate("Details", {
      name: "Details",
      itemId: item.id,
      price: item.price,
    }),
      console.log("hadlemore" + " " + item.id);
  };
  const searchFilter = (text) => {
    if (text) {
      setData(
        Villa_API.filter((item) =>
          item.location.toLocaleLowerCase().includes(text.toLowerCase())
        ).map((item) => item)
      );
    }
  };

  useEffect(() => {
    console.log(searchText);
    if (!searchText) {
      setData(Villa_API);
    } else {
      searchFilter(searchText);
    }
    console.log(data.length + " " + "data.length");
  }, [searchText]);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {data.length > 0 ? (
        <>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <FilteredData item={item} handleItem={handleItem} />
            )}
            keyExtractor={(item) => item.id}
          />

          <FlatList />
        </>
      ) : (
        <NotFound />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 2,
  },

  image: {
    margin: 2,
    marginTop: 5,
    height: 250,
    width: "98%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 2,
    resizeMode: "cover",
  },
});
