import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";

export const Reviews = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  const navigation = useNavigation();
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
              Reviews
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
