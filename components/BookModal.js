import React, { useState, useContext } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import BookIcon from "react-native-vector-icons/MaterialIcons";
import CloseIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { AddVilla } from "../api/data";
import AuthContext from "../context/ContextApi";
const BookModal = ({ setModalVisible, item }) => {
  const [BookModalVisible, setBookModalVisible] = useState(false);
  const { bookingModal, handleBookingButton } = useContext(AuthContext);

  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={BookModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setBookModalVisible(!BookModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{ width: "100%", alignItems: "flex-end" }}
              onPress={() => (
                setBookModalVisible(!BookModalVisible),
                handleBookingButton(false)
              )}
            >
              <CloseIcon name="close" color="#B2002D" size={32} />
            </Pressable>

            <View
              style={{
                backgroundColor: "white",
                borderRadius: 50,
                width: 92,
                height: 92,
                alignItems: "center",
                justifyContent: "center",

                marginTop: 90,
              }}
            >
              <CloseIcon name="check" color="#B2002D" size={52} />
            </View>

            <View>
              <Text
                style={{
                  fontFamily: "Montserrat_500Medium",
                  fontSize: 35,
                  color: "#2f3e46",
                  width: "80%",
                  marginTop: 20,
                }}
              >
                Booking Confirm
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat_500Medium",
                  fontSize: 15,
                  color: "#2f3e46",
                  marginLeft: 50,
                  marginRight: 50,
                }}
              >
                We will call you for more information in 24 Hours
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat_500Medium",
                  fontSize: 15,
                  color: "#2f3e46",
                }}
              >
                Thanks for Booking !!
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <Pressable
                style={styles.bookButton}
                onPress={() => (
                  setBookModalVisible(!BookModalVisible),
                  handleBookingButton(false),
                  navigation.navigate("Booking", { name: "Booking" })
                )}
              >
                <Text
                  style={{
                    fontFamily: "Montserrat_700Bold",
                    color: "white",
                    margin: 9,
                  }}
                >
                  View More
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
        </View>
      </Modal>
      <Pressable
        style={{ width: 30, height: 30, backgroundColor: "white" }}
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
          AddVilla(bookingData);
          //console.log(item.image)
          console.log("item from yes");
          setBookModalVisible(true);
          handleBookingButton(true);
        }}
      >
        <Text style={styles.textStyle}>YES</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {},
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#edede9",
    padding: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 150,
    height: 40,
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

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    color: "#B2002D",
  },
  buttonOpen: {
    zIndex: 1,
  },
  Confirmbutton: {
    justifyContent: "center",
    height: 50,
    padding: 10,
    alignItems: "flex-start",
    alignContent: "flex-start",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    color: "#B2002D",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    color: "gray",
    fontSize: 15,
    width: "100%",
  },
});

export default BookModal;
