import react, { useState, useEffect } from "react";
// import { View, Text } from "react-native"; // no hace falta ya que no lo vamos a usar.
import { getAuth, onAuthStateChanged } from "firebase/auth";
// importamos las screens que queremos que se vea si está o no logueado.
import { UserGuest } from "./UserGuest";
import { UserLogged } from "./UserLogged";

export default function Account() {
  const [hasLogged, setHasLogged] = useState(null); // valor, función, devolución default.

  useEffect(() => {
    // console.log("HOLA");
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // console.log(user); // me devuelve null ya que el usuario no está logueado.
      setHasLogged(user ? true : false);
    });
  }, []);

  /* return (
    <View>
      <Text>Account...</Text>
    </View>
  ); */

  return hasLogged ? <UserLogged /> : <UserGuest />;
}
