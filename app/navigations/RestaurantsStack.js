import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "../screens/Restaurants";

// creamos nuestro componente que va a estar encargado de crear el Stack

const Stack = createNativeStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{ title: "Restaurantes" }}
      />
      {/* <Stack.Screen 
                name="add-restaurants"
                component={Restaurants}
                options={{ title:"Añadir Restaurant" }}
            /> */}
    </Stack.Navigator>
  );
}
