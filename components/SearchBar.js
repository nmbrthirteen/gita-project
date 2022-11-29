import React, { useState, useEffect, useContext } from "react";
import { View, TextInput } from "react-native";
import FilterIcon from "react-native-vector-icons/Feather";
import AuthContext from "../context/ContextApi";
import Icon from "react-native-vector-icons/FontAwesome";

export const SearchBar = () => {
  const [search, onChangeSearch] = useState("");
  const { handleSearch, searchText } = useContext(AuthContext);
  useEffect(() => {
    console.log(search + "search");
    console.log(search + "searchText");
  }, [search]);

  return (
    <View
      style={{
        alignItems: "center",
        alignContent: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
      }}
    >
      <Icon
        name="search"
        size={20}
        color="gray"
        style={{ marginRight: -27, zIndex: 1 }}
      />
      <TextInput
        style={{
          width: "100%",
          height: 30,
          borderRadius: 50,
          backgroundColor: "#e5e5e5",
          marginRight: 5,
          zIndex: 0,
          paddingLeft: 45,
        }}
        onChangeText={(text) => (handleSearch(text), onChangeSearch(text))}
        defaultValue={searchText}
        value={searchText}
      />
      <FilterIcon
        name="filter"
        size={24}
        color="gray"
        style={{ marginRight: 7 }}
      />
    </View>
  );
};
