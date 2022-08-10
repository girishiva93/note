import { NavigationContainer } from "@react-navigation/native";
import TodoListing from "./src/pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNotes from "./src/components/AddNotes";
import Search from "./src/components/Search";

import {store} from "./store/store"
import { Provider } from "react-redux";

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
          <Stack.Screen name="Home" component={TodoListing} />
          <Stack.Screen name="Todo" component={AddNotes} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}
