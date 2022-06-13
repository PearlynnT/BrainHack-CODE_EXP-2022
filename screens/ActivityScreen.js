import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Title } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const category = [
  { cat: "Sports & Fitness" },
  { cat: "Health & Wellness" },
  { cat: "Social" },
  { cat: "Hobbies & Interests" },
  { cat: "Volunteer" },
];

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        renderItem={({ item }) => {
          return <Title>{item.cat}</Title>;
        }}
        keyExtractor={(item) => item.cat}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    padding: 20,
  },
});
