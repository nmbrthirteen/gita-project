import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";


export const Amiantus = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
 
  return (
    <View style={styles.container}>
      {fontsLoaded ? (
        <View style={{ width: "100%", alignItems: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              width: "80%",
              //height:'20%',
              marginTop: 180,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat_700Bold",
                fontSize: 20,
              }}
            >
              Amiantus
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    //backgroundColor:'#B2002D',
    justifyContent: "center",
    alignItems: "center",
  },
});
