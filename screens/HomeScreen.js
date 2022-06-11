import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreateActivity")}
      >
        <Text style={styles.buttonTitle}>Start a new activity</Text>
      </TouchableOpacity>
    </View>
  );
}

function CreateActivityScreen() {
  return (
    <View style={styles.container}>
      <Text>Create Activity</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateActivity" component={CreateActivityScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
});
