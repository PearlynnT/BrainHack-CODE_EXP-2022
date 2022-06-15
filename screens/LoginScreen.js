import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Title } from "react-native-paper";
import firebase from "../database/firebaseDB";

//const db = firebase.firestore();
//const auth = firebase.auth();

const LoginScreen = (props) => {
  //const [text, onChangeText] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     const uid = response.user.uid;
    //     const usersRef = firebase.firestore().collection("users");
    //     usersRef
    //       .doc(uid)
    //       .get()
    //       .then((firestoreDocument) => {
    //         if (!firestoreDocument.exists) {
    //           alert("User does not exist anymore.");
    //           return;
    //         }
    //         const user = firestoreDocument.data();
    //         navigation.navigate("Home", { user });
    //       })
    //       .catch((error) => {
    //         alert(error);
    //       });
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  };

  return (
    <View style={styles.container}>
      <Title>Log In</Title>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoCapitalize="none"
        autoFocus={true}
        onChangeText={(text) => setEmail(text)}
        underlineColorAndroid="transparent"
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
        underlineColorAndroid="transparent"
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
        <Text style={styles.buttonTitle}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
        <Text style={styles.footerText}>
          Don't have an account? Click here to register.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    borderRadius: 15,
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    borderRadius: 15,
    backgroundColor: "#000080",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    color: "#0000EE",
    fontSize: 15,
  },
});

export default LoginScreen;
