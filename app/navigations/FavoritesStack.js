import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";

// creamos nuestro componente que va a estar encargado de crear el Stack

const Stack = createNativeStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{ title: "Restaurantes Favoritos" }}
      />
    </Stack.Navigator>
  );
}
