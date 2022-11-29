import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";

const CardItem = ({ item }) => {
  useEffect(() => {
    console.log(item);
  });
  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "space-between",
          height: 60,
          alignContent: "center",
          alignItems: "center",
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
          borderBottomLeftRadius:
            item.description === "Feedback" || item.description === "Language"
              ? 6
              : 0,
          borderTopLeftRadius:
            item.description === "All My Booking" ||
            item.description === "Booking Address"
              ? 6
              : 0,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ padding: 10 }}>
            <Text>{item.firstIcon}</Text>
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                color: "gray",
                fontSize: 17,
                fontFamily: "Montserrat_500Medium",
              }}
            >
              {item.description}
            </Text>
          </View>
        </View>
        {item.currency || item.language ? (
          <>
            <View>
              <Text
                style={{ fontFamily: "Montserrat_500Medium", color: "gray" }}
              >
                {item.currency}
              </Text>
            </View>
            <View>
              <Text
                style={{ fontFamily: "Montserrat_500Medium", color: "gray" }}
              >
                {item.language}
              </Text>
            </View>
          </>
        ) : null}
        <View
          style={{
            backgroundColor: "#edede9",
            borderRadius: 50,
            width: 25,
            height: 25,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <Text>{item.rightIcon}</Text>
        </View>
      </View>
      {item.description !== "Language" || item.description !== "Feedback" ? (
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
          <View
            style={{
              width: "30%",
              height: 1,
              backgroundColor: "white",
              alignSelf: "flex-start",
            }}
          ></View>
          <View
            style={{
              width: "70%",
              height: 1,
              backgroundColor: "#edede9",
              alignSelf: "flex-end",
            }}
          ></View>
        </View>
      ) : null}
    </View>
  );
};

export const Card = ({ item }) => {
  return (
    <View>
      <FlatList
        data={item}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
