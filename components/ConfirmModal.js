import React, { useState, useContext,useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import BookIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import BookModal from "./BookModal";
import AuthContext from "../context/ContextApi";
const ConfirmModal = ({ item }) => {
  const { bookingModal, handleBookingButton } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(bookingModal);
  useEffect(()=>{

  },[bookingModal])
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={bookingModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!bookingModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you shure you want to Book Villa?
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 90,
                height: "20%",
                alignItems: "baseline",
              }}
            >
              <Pressable
                style={styles.Confirmbutton}
                onPress={() => (
                  setModalVisible(!bookingModal),
                  handleBookingButton(!bookingModal)
                )}
              >
                <Text style={styles.textStyle}>CANCELL</Text>
              </Pressable>
              <Pressable
                style={styles.Confirmbutton}
                onPress={() => {
                  setModalVisible(!bookingModal);
                  // navigation.navigate("BookModal", { name: "BookModal"})
                  console.log(item);
                  console.log("from confirmmodal");
                  setBookingModal(true);
                }}
              >
                <BookModal
                  item={item}
                  setModalVisible={handleBookingButton}
                  modalVisible={true}
                ></BookModal>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.button}
        onPress={() => (setModalVisible(true), handleBookingButton(true))}
      >
        <Text
          style={{
            fontFamily: "Montserrat_700Bold",
            color: "white",
            marginLeft: 32,
          }}
        >
          Book
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
  );
};

const styles = StyleSheet.create({
  centeredView: {},
  modalView: {
    margin: 20,
    marginTop: 225,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    shadowColor: "#000",
    borderColor: "black",
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 150,
    height: 40,
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

export default ConfirmModal;
