import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import IconShare from "react-native-vector-icons/FontAwesome5";
import { Reviews } from "../components/Reviews";
import { Amiantus } from "../components/Amiantus";
import ConfirmModal from "../components/ConfirmModal";

export const DetailsPage = ({ item }) => {
  const [active, setActive] = useState({
    amiantus: false,
    details: true,
    reviews: false,
  });

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {}, [active]);

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View
        style={{
          width: "60%",
          justifyContent: "space-around",
          flexDirection: "row",
          marginTop: 20,
          marginLeft: "20%",
        }}
      >
        <View
          style={
            active.amiantus ? styles.dot : { ...styles.dot, ...styles.opacity }
          }
        ></View>
        <View
          style={
            active.details ? styles.dot : { ...styles.dot, ...styles.opacity }
          }
        ></View>
        <View
          style={
            active.reviews ? styles.dot : { ...styles.dot, ...styles.opacity }
          }
        ></View>
      </View>
      {/* top buttons*/}
      <View style={styles.cardBottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setActive({
              amiantus: true,
              details: false,
              reviews: false,
            })
          }
        >
          <Text
            style={
              active.amiantus
                ? { ...styles.commonText, ...styles.activeText }
                : styles.commonText
            }
          >
            Amiantus
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setActive({
              amiantus: false,
              details: true,
              reviews: false,
            })
          }
        >
          <Text
            style={
              active.details
                ? { ...styles.commonText, ...styles.activeText }
                : styles.commonText
            }
          >
            Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setActive({
              amiantus: false,
              details: false,
              reviews: true,
            })
          }
        >
          <Text
            style={
              active.reviews
                ? { ...styles.commonText, ...styles.activeText }
                : styles.commonText
            }
          >
            Reviews
          </Text>
        </TouchableOpacity>
      </View>
      {/* middle content*/}
      {active.details ? (
        <>
          <View
            style={{
              width: "80%",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 20,
              marginLeft: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat_500Medium",
                color: "gray",
                fontSize: 12,
              }}
            >
              BADROOM
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat_500Medium",
                color: "gray",
                fontSize: 12,
              }}
            >
              {0}
              {item.badroom}
            </Text>
          </View>

          <View
            style={{
              width: "80%",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 50,
              marginLeft: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat_500Medium",
                color: "gray",
                fontSize: 12,
              }}
            >
              TOTAL AREA
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat_500Medium",
                color: "gray",
                fontSize: 12,
              }}
            >{`${item.totalArea} sq ft (${Math.round(
              item.totalArea / 10.764
            )} m2) `}</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              marginTop: 70,
              width: "80%",
              alignItems: "center",
              marginLeft: 30,
            }}
          >
            <Text style={{ fontSize: 17, fontFamily: "Montserrat_500Medium" }}>
              {item.detailsDescription}
            </Text>
          </View>
        </>
      ) : active.amiantus ? (
        <Amiantus />
      ) : active.reviews ? (
        <Reviews />
      ) : null}
      {/* bottom buttons*/}
      <View style={styles.cardBottom2}>
        <TouchableOpacity style={styles.shareButton}>
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              color: "gray",
              margin: 9,
            }}
          >
            SHARE THIS
          </Text>
          <IconShare size={25} color="gray" name="arrow-circle-up" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => setModalVisible(true)}
        >
          <ConfirmModal item={item} />
          {/*

         <Text style={{
              fontFamily:'Montserrat_700Bold',
              color:'white',
              margin:9
              }}>
              Book
           </Text>
           <View style={{
             backgroundColor:'white',
             borderRadius:50,
             width:29,
             height:29,
             alignItems:'center',
             justifyContent:'center'}}>
             <BookIcon name='arrow-forward-ios' size={18} color='red'/>
           </View>




            */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginVertical: 8,
  },
  headerTitle: {
    fontSize: 45,
    textAlign: "center",
    paddingTop: 30,
    color: "#B2002D",
    fontFamily: "Montserrat_700Bold",
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
  button: {
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  cardBottom: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
  cardBottom2: {
    margin: 7,
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
  },
  bookButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 150,
    height: 40,
    backgroundColor: "#B2002D",
    borderRadius: 50,
  },
  shareButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
  dot: {
    backgroundColor: "gray",
    width: 7,
    height: 7,
    borderRadius: 50,
  },
  opacity: {
    opacity: 0.5,
  },
  activeText: {
    color: "#B2002D",
  },
  commonText: {
    fontFamily: "Montserrat_500Medium",
    color: "gray",
    fontSize: 15,
  },
});
