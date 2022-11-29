import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import BookIcon from "react-native-vector-icons/MaterialIcons";
import CloseIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Card } from "./Card";
import LocationIcon from "react-native-vector-icons/EvilIcons";
import CreditcardIcon from "react-native-vector-icons/AntDesign";
import WalletIcon from "react-native-vector-icons/Ionicons";
import LanguageIcon from "react-native-vector-icons/FontAwesome5";
import MoreIcon from "react-native-vector-icons/MaterialIcons";
import MenuIcon from "react-native-vector-icons/Ionicons";
export const MoreModal = (open) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{ width: "100%", alignItems: "flex-end", marginTop: 10 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <CloseIcon name="close" color="#B2002D" size={32} />
            </Pressable>
            <View style={{ width: "100%", marginTop: 20 }}>
              <Card
                item={[
                  {
                    id: 1,
                    firstIcon: (
                      <LocationIcon name="location" color="gray" size={26} />
                    ),
                    description: "Booking Address",
                    rightIcon: (
                      <MoreIcon
                        name="arrow-forward-ios"
                        size={15}
                        color="#2f3e46"
                      />
                    ),
                  },
                  {
                    id: 2,
                    firstIcon: (
                      <CreditcardIcon
                        name="creditcard"
                        color="gray"
                        size={26}
                      />
                    ),
                    description: "Payment Method",
                    rightIcon: (
                      <MoreIcon
                        name="arrow-forward-ios"
                        size={15}
                        color="#2f3e46"
                      />
                    ),
                  },
                  {
                    id: 3,
                    firstIcon: (
                      <WalletIcon
                        name="wallet-outline"
                        color="gray"
                        size={26}
                      />
                    ),
                    description: "Currency",
                    rightIcon: (
                      <MoreIcon
                        name="arrow-forward-ios"
                        size={15}
                        color="#2f3e46"
                      />
                    ),
                    currency: "USD",
                  },
                  {
                    id: 4,
                    firstIcon: (
                      <LanguageIcon name="language" color="gray" size={26} />
                    ),
                    description: "Language",
                    rightIcon: (
                      <MoreIcon
                        name="arrow-forward-ios"
                        size={18}
                        color="#2f3e46"
                      />
                    ),
                    language: "English",
                  },
                ]}
              />
            </View>
            <Pressable>
              <View style={{ marginTop: 50 }}>
                <Text
                  style={{
                    color: "#B2002D",
                    fontFamily: "Montserrat_500Medium",
                  }}
                >
                  LOG OUT
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          height: 50,
        }}
      >
        <Pressable onPress={() => setModalVisible(true)}>
          <MenuIcon name={"menu-outline"} size={26} color={"gray"} />
          <Text style={{ color: "gray", fontSize: 12 }}>More</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    width: "100%",
    height: "93%",
    backgroundColor: "#edede9",
    padding: 30,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
  },

  textStyle: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    fontSize: 15,
    width: "100%",
    color: "#B2002D",
  },
});
