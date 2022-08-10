import { NavigationContainer } from "@react-navigation/native";
import TodoListing from "./src/pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNotes from "./src/components/AddNotes";
import Search from "./src/components/Search";

import { store } from "./store/store";
import { Provider } from "react-redux";
import PopUp from "./src/components/PopUp";
import EditNote from "./src/components/EditNote";
import LogIn from "./src/pages/LogIn";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="Home" component={TodoListing} />
          <Stack.Screen name="Todo" component={AddNotes} />
          <Stack.Screen name="Edit" component={EditNote} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="showApp" component={PopUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
