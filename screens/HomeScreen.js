import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import { Title } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Create Activity")}
      >
        <Text style={styles.buttonTitle}>Start a new activity</Text>
      </TouchableOpacity>
      <Title style={styles.heading}>Your Upcoming Activities</Title>
    </View>
  );
}

function CreateActivityScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  const [text, onChangeText] = useState(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === "ios");
    if (mode == "date") {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode("time");
      setShow(Platform.OS !== "ios");
    } else {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setShow(Platform.OS === "ios");
      setMode("date");
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const formatDate = (date, time) => {
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
  };

  const navigation = useNavigation();

  const onCreateActivityPress = () => {
    navigation.navigate("HomeScreen"); // TODO
  };

  return (
    <View style={styles.container}>
      {selectedImage !== null ? (
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      ) : (
        <Image
          source={require("../assets/default-thumbnail-pic.jpeg")}
          style={styles.thumbnail}
        />
      )}
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text style={styles.add}>Add Image</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Activity Name"
        autoCapitalize="words"
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        //value={activityName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        multipline={true}
        textAlignVertical="top"
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        //value={activityDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        autoCapitalize="words"
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        //value={activityLocation}
      />
      <TouchableOpacity onPress={() => showMode("date")}>
        <Text style={styles.datetime}>{formatDate(date, time)}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => onCreateActivityPress()}
      >
        <Text style={styles.buttonTitle}>Create Activity</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Create Activity" component={CreateActivityScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
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
  add: {
    color: "blue",
    marginTop: 20,
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
  heading: {
    marginTop: 20,
  },
  datetime: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
