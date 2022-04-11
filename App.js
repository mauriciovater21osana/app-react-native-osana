import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navigation from "./app/navigations/Navigation";
import { initFirebase } from "./app/utils/firebase";

LogBox.ignoreAllLogs(); // para ignorar el mensaje de warning mientras desarrollamos (en consola se vé).

export default function App() {
  return <Navigation />;
}
