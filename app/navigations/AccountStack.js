import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screens/Account/Account";
// creamos nuestro componente que va a estar encargado de crear el Stack

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Mi Cuenta" }}
      />
    </Stack.Navigator>
  );
}
