import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
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

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={{ width: 200, height: 200 }}
        />
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/default-profile-pic.jpeg")}
        style={{ width: 200, height: 200 }}
      />
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text style={styles.edit}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  edit: {
    color: "blue",
    marginTop: 20,
  },
});
