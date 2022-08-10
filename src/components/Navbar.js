import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={navStyle.topNav}>
      <View style={navStyle.title__section}>
          <Text style={navStyle.topNavText}>Notes</Text>
      </View>
        <View style={navStyle.utils__icon}>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <View style={navStyle.utils__icon__search}>
              <Image source={require("../../assets/icon/searchIcon.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={navStyle.utils__icon__info}>
              <Image source={require("../../assets/icon/helpIcon.png")} />
            </View>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const navStyle = StyleSheet.create({
  topNav: {
    marginTop: 10,
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  topNavText: {
    color: "white",
    fontSize: 30,
    marginLeft: 20,
    
  },
  nav: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    flex: 1,
  },

  utils__icon__info: {
    width: 50,
    height: 50,
    backgroundColor: "#3B3B3B",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  go__back: {
    width: 50,
    height: 50,
    backgroundColor: "#3B3B3B",
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon__remove: {
    display: "none",
  },
  utils__icon: {
    flexDirection: "row",
  },
  utils__icon__search: {
    width: 50,
    height: 50,
    backgroundColor: "#3B3B3B",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
export default Navbar;
