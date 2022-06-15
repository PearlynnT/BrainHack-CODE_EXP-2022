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

const RegisterScreen = (props) => {
  //const [text, onChangeText] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onRegisterPress = () => {
    // if (password !== confirmPassword) {
    //   alert("Passwords don't match.");
    //   return;
    // }
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     const uid = response.user.uid;
    //     const data = {
    //       id: uid,
    //       email,
    //       name,
    //     };
    //     const usersRef = firebase.firestore().collection("users");
    //     usersRef
    //       .doc(uid)
    //       .set(data)
    //       .then(() => {
    //         navigation.navigate("Log In", { user: data });
    //       })
    //       .catch((error) => {
    //         alert(error);
    //       });
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
    props.navigation.navigate("Log In");
  };

  return (
    <View style={styles.container}>
      <Title>Register</Title>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
        autoFocus={true}
        onChangeText={(text) => setName(text)}
        underlineColorAndroid="transparent"
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoCapitalize="none"
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(text) => setConfirmPassword(text)}
        underlineColorAndroid="transparent"
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={() => onRegisterPress()}>
        <Text style={styles.buttonTitle}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Log In")}>
        <Text style={styles.footerText}>
          Already have an account? Click here to log in.
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

export default RegisterScreen;
