import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";

import { BookingData } from "../api/data";
import BookIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Ionicons";
const BookingDetailsPage = ({ item }) => {
  const navigation = useNavigation();
  useEffect(() => {
    //console.log(item)
    //console.log('itemdata')
  },[item]);
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={{ padding: 5 }}>
        <View
          style={{ marginTop: 10, justifyContent: "center", marginLeft: 10 }}
        >
          <Text style={{ fontFamily: "Montserrat_500Medium" }}>
            {item.detailsDescription}
          </Text>
        </View>
        <View
          style={{ marginTop: 10, justifyContent: "center", marginLeft: 10 }}
        >
          <Text style={{ fontFamily: "Montserrat_500Medium", fontSize: 15 }}>
            Price: {item.price} / Per Day Total: ${item.totalPrice}
          </Text>
        </View>
        <View
          style={{ marginTop: 10, justifyContent: "center", marginLeft: 10 }}
        >
          <Text style={{ fontFamily: "Montserrat_500Medium", fontSize: 15 }}>
            Check In Date: 12th April 2021
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            justifyContent: "space-between",
            marginLeft: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Montserrat_500Medium", fontSize: 15 }}>
            Check Out Date: 18th April 2021
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="location-sharp" size={17} color="black" />
            <Text style={{ paddingLeft: 10 }}>{item.location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const Booking = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    console.log(BookingData);
    console.log("bookingdata");
    setData(BookingData);
  }, [data]);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <BookingDetailsPage item={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <Pressable
          style={styles.bookButton}
          onPress={() => navigation.navigate("Home", { name: "Home" })}
        >
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              color: "white",
              margin: 9,
            }}
          >
            Book More
          </Text>

          <View
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              width: 29,
              height: 29,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BookIcon name="arrow-forward-ios" size={18} color="red" />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginVertical: 8,
  },

  image: {
    margin: 2,
    marginTop: 20,
    height: 250,
    width: "98%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 2,
    resizeMode: "cover",
  },
  bookButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "#B2002D",
    borderRadius: 50,
    shadowColor: "#B2002D",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});
