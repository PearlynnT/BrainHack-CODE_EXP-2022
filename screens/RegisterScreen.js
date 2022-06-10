// TODO: Add authentication

import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const RegisterScreen = (props) => {
  const [text, onChangeText] = useState(null);

  const onRegisterPress = () => {
    props.navigation.navigate("Log In"); // TODO
  };

  return (
    <View style={styles.container}>
      <Text>Register (Change this to a logo)</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        autoFocus={true}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        //value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        //value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        //value={confirmPassword}
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
