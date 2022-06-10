// TODO: Add authentication

import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = (props) => {
  const [text, onChangeText] = React.useState(null);

  const onLoginPress = () => {}; // TODO

  return (
    <View style={styles.container}>
      <Text>Log In (Change this to a logo)</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        autoFocus={true}
        onChangeText={onChangeText}
        //value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={onChangeText}
        //value={password}
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
