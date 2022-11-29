import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Home } from "../screens/Home";
import { Location } from "../screens/Location";
import { Booking } from "../screens/Booking";
import { Profile } from "../screens/Profile";
import { MoreModal } from "./MoreModal";
import { Login } from "../screens/Login";
import { FirstScreen } from "../screens/FirstScreen";
import { Details } from "../screens/Details";
import IconHome from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import HeaderIcon from "react-native-vector-icons/MaterialIcons";
import BookModal from "./BookModal";
import { SearchBar } from "./SearchBar";
const Tab = createBottomTabNavigator();

const MyModalBackgroundScreen = () => {
  return null;
};

const ScneensContainer = ({}) => {
  
  return (
    <Tab.Navigator
      screenOptions={({ route,navigation,order }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let menuIcon;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Location") {
            iconName = focused ? "search1" : "search1";
          } else if (route.name === "Booking") {
            iconName = "hearto";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else {
            menuIcon = "menu-outline";
          }
          return <IconHome name={iconName} size={size} color={color} />;
        },
        tabBarHideOnKeyboard: true,
      
        tabBarActiveTintColor: "#B2002D",
        tabBarInactiveTintColor: "gray",
        headerShown:
          route.name === "Details" ||
          route.name === "Profile" ||
          route.name === "Booking" ||
          route.name === "Location"
            ? true
            : false,
        headerTitle:
          route.name === "Profile" || route.name === "Location"
            ? " "
            : route.name === "Booking"
            ? `${route.name} History`
            : route.name,
        headerStyle: { backgroundColor: "inherit", borderWidth: 0 },
        headerTitleStyle: {
          color: "#B2002D",
          fontFamily: "Montserrat_500Medium",
          fontSize: 14,
        },
        headerLeft: () => (
          <HeaderIcon
            onPress={() => navigation.goBack()}
            name="arrow-back-ios"
            color="#B2002D"
            size={20}
            style={{ marginLeft: 20, marginRight: 0 }}
          />
        ),
        headerRight: () => (
          (
            <Text
              style={{
                color: "#B2002D",
                fontFamily: "Montserrat_500Medium",
                marginRight: 0,
                marginLeft: -4,
              }}
            >
              {route.name === "Details" ? `Price ${route.params.price}` : null}
            </Text>
          ),
          route.name === "Location" ? <SearchBar /> : null
        ),
        
      })}
      backBehavior='history'
    >
      <Tab.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Location" component={Location} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        name="More"
        component={MyModalBackgroundScreen}
        /*listeners={() => ({
           tabPress: event => {
             event.preventDefault();
             navigation.navigate("More",{ name: "Details",modalVisible:true})
           }
         })
        }

        */
        options={{
          tabBarLabel: ({}) => {
            return null; //no label will be displayed
          },
          tabBarButton: () => {
            return <MoreModal open={true} />;
          },
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name="BookModal"
        component={BookModal}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
    </Tab.Navigator>
  );
};

export default ScneensContainer;
