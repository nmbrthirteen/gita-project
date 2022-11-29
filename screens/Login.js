import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
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
              justifyContent: "flex-end",
              alignContent: "flex-start",
              width: "80%",
              //height:'20%',
              marginBottom: 25,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat_700Bold",
                fontSize: 20,
              }}
            >
              Login Account
            </Text>
          </View>
          {/* textinput component cause error ---  */}
          <Text style={styles.textLabel}>Email</Text>
          {<TextInput style={styles.input} />}
          <Text style={styles.textLabel}>Password</Text>
          {<TextInput style={styles.input} />}

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home", { name: "Home" })}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Montserrat_500Medium",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Montserrat_700Bold",
              margin: 10,
              color: "#B2002D",
            }}
          >
            FORGOT PASSWORD
          </Text>
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
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: 1.5,
  },
  button: {
    height: 50,
    width: "80%",
    backgroundColor: "#B2002D",
    borderRadius: 50,
    alignItems: "center",
    padding: 15,
  },
  textLabel: {
    width: "80%",
    alignItems: "flex-start",
    fontFamily: "Montserrat_500Medium",
  },
});
