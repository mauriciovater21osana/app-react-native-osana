import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopRestaurants from "../screens/TopRestaurants";
// creamos nuestro componente que va a estar encargado de crear el Stack

const Stack = createNativeStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-restaurants"
        component={TopRestaurants}
        options={{ title: "Top Five de Restaurants" }}
      />
    </Stack.Navigator>
  );
}
