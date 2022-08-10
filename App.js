import { SafeAreaView, Platform, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import TodoListing from "./src/pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNotes from "./src/components/AddNotes";
import Search from "./src/components/Search";
import Popup from "./src/components/Popup";
import NodeListing from "./src/components/NodeListing";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={TodoListing} />
          <Stack.Screen name="Todo" component={AddNotes} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Popup" component={Popup} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
