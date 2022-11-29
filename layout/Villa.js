import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity,Alert  } from "react-native";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Icon from "react-native-vector-icons/Ionicons";
import { AddVilla } from "../api/data";
import { useNavigation } from "@react-navigation/native";

const Villa = ({ item, handleMore }) => {
 
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={{ fontFamily: "Montserrat_500Medium", fontSize: 12 }}>
        {item.description}
      </Text>
      <Text style={{ color: "#B2002D" }}>{item.price}</Text>

      <View style={styles.cardBottom}>
        <Text style={{ fontFamily: "Montserrat_500Medium" }}>
          {<Icon name="location-sharp" size={12} color="black" />}{" "}
          {item.location}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleMore(item.id)}
        >
          <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              color: "white",
            }}
          >
            MORE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={async (e) => {
            e.preventDefault();

            const bookingData = {
              id: item.id,
              image: item.image,
              price: item.price,
              totalPrice: Math.round(Math.PI * 2000),
              checkInDate: 2,
              checkOutDate: 9,
              location: item.location,
              detailsDescription: item.detailsDescription,
            };
            
            Alert.alert(
              "Booking",
              "Are you shure you want to Book Villa?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => (
                  AddVilla(bookingData),
                  navigation.navigate("Booking", { name: "Booking" })
                  )}
              ]
            );
            
         
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat_500Medium",
              color: "white",
            }}
          >
            BOOK VILLA
          </Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

export default Villa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 45,
    textAlign: "center",
    paddingTop: 30,
    color: "#B2002D",
    fontFamily: "Montserrat_700Bold",
  },
  image: {
    height: 150,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 2,
    resizeMode: "cover",
  },
  button: {
    height: 25,
    width: 100,
    backgroundColor: "#B2002D",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  button2: {
    height: 25,
    width: 130,
    backgroundColor: "#B2002D",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "Montserrat_500Medium",
    color: "white",
  },
  cardBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
});
