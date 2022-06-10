import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Log In</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
        <Text>Don't have an account? Click here to register.</Text>
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
});

export default LoginScreen;
