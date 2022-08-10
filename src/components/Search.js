import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { todoTask } from "../../data";

const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${randomColor}`;
};

const Search = ({navigation}) => {
  const [filterSearch, setFilterSearch] = useState([]);

  const handleSearch = (event) => {
    let value = event;

    if (!value.length > 0 || value === "") {
      setFilterSearch([]);
    } else {
      const newData = todoTask.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = value.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterSearch(newData);
    }
  };

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.searchBar__clicked}>
        <TextInput
          style={homeStyles.search__input}
          placeholderTextColor="#9A9A9A"
          placeholder="Search by the keyword..."
          onChange={(e) => handleSearch(e.nativeEvent.text)}
        />
        <TouchableOpacity style={homeStyles.cancel__btn}>
          <Image source={require("../../assets/icon/cancel.png")} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!filterSearch.length > 0 || filterSearch === "" ? (
            <View>
              <Image
                source={require("../../assets/icon/filenotfoundIcon.png")}
              />
              <Text style={{ color: "white", textAlign:"center" }}>
                File not found. Try searching again.
              </Text>
            </View>
          ) : (
            filterSearch.map(function (item, key) {
              return (
                <TouchableOpacity key={key}>
                  <View
                    style={{
                      width: "100%",
                      backgroundColor: generateColor(),
                      margin: 10,
                      padding: 30,
                      borderRadius: 10,
                      fontSize: 20,
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  search__input: {
    fontSize: 18,
    marginLeft: 20,
    color:'#CCCCCC'
  },
  searchBar__clicked: {
    marginTop: 100,
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#3B3B3B",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },

  cancel__btn: {
    marginRight: 20,
  },
});

export default Search;
