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
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.cat}
        data={category}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                style={styles.header}
                onPress={() => navigation.navigate("Activity List")}
              >
                <Title>{item.cat}</Title>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </>
          );
        }}
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seeAll: {
    color: "#000080",
    fontSize: 18,
    fontWeight: "bold",
  },
});
