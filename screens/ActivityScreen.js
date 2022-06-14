import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Title, Card, Paragraph, List } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
//import ActivityPreview from "../components/ActivityPreview";
import activity from "../activity";

const category = [
  { cat: "Sports & Fitness" },
  { cat: "Health & Wellness" },
  { cat: "Social" },
  { cat: "Hobbies & Interests" },
  { cat: "Volunteer" },
];

const activityAsObject = activity.map((activity) => {
  return {
    activity: activity,
  };
});

function ActivityScreen() {
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
              <FlatList
                horizontal={true}
                data={activityAsObject}
                renderItem={(item) => {
                  return (
                    <>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Activity Details")}
                      >
                        <Card>
                          <Card.Cover
                            source={require("../assets/default-thumbnail-pic.jpeg")}
                          ></Card.Cover>
                          <Card.Content>
                            <Title>Name</Title>
                            <Paragraph>Date | Time</Paragraph>
                          </Card.Content>
                        </Card>
                      </TouchableOpacity>
                    </>
                  );
                }}
              />
            </>
          );
        }}
      />
    </View>
  );
}

function ActivityListScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={activityAsObject}
        renderItem={(item) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate("Activity Details")}
              >
                <List.Item
                  title="Name"
                  description="Date | Time"
                  left={(props) => (
                    <Image
                      source={require("../assets/default-thumbnail-pic.jpeg")}
                      style={styles.icon}
                    />
                  )}
                />
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
}

function ActivityDetailsScreen() {
  const navigation = useNavigation();

  const onJoinPress = () => {
    navigation.navigate("ActivityScreen");
  };

  return (
    <View style={styles.details}>
      <Image
        source={require("../assets/default-thumbnail-pic.jpeg")}
        style={styles.thumbnail}
      />
      <Title>Name</Title>
      <Title>Date | Time</Title>
      <Title>Location</Title>
      <Paragraph>Description</Paragraph>
      <TouchableOpacity style={styles.button} onPress={() => onJoinPress()}>
        <Text style={styles.buttonTitle}>Join</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function ActivityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Activity List" component={ActivityListScreen} />
      <Stack.Screen name="Activity Details" component={ActivityDetailsScreen} />
    </Stack.Navigator>
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
  icon: {
    height: 100,
    width: 100,
  },
  details: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  thumbnail: {
    height: 200,
    width: "90%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
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
