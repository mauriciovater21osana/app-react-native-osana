import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
// import Restaurants from "../screens/Restaurants"; * lo borramos para cambiarlo por el stack de creamos.
import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants-stack"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "green",
          // creamos una función que impacta en tabBarIcon
          tabBarIcon: ({ color }) => screenOptions(route, color), // screenOptions u otro nombre
        })}
      >
        <Tab.Screen
          name="restaurants-stack"
          component={RestaurantsStack}
          options={{ title: "Restaurantes", headerShown: false }}
        />
        <Tab.Screen
          name="favorites-stack"
          component={FavoritesStack}
          options={{ title: "Favoritos", headerShown: false }}
        />
        <Tab.Screen
          name="top-restaurants-stack"
          component={TopRestaurantsStack}
          options={{ title: "Top 5", headerShown: false }}
        />
        <Tab.Screen
          name="search-stack"
          component={SearchStack}
          options={{ title: "Buscar", headerShown: false }}
        />
        <Tab.Screen
          name="account-stack"
          component={AccountStack}
          options={{ title: "Cuenta", headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  // función para asignar color e íconos según tab
  let iconName;

  switch (route.name) {
    case "restaurants-stack":
      iconName = "compass-outline";
      break;
    case "favorites-stack":
      iconName = "heart-outline";
      break;
    case "top-restaurants-stack":
      iconName = "star-outline";
      break;
    case "search-stack":
      iconName = "magnify";
      break;
    case "account-stack":
      iconName = "home-outline";
      break;
    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
