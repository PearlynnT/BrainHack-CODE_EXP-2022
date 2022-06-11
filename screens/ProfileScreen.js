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

  return (
    <View style={styles.container}>
      {selectedImage !== null ? (
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.profile}
        />
      ) : (
        <Image
          source={require("../assets/default-profile-pic.jpeg")}
          style={styles.profile}
        />
      )}
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
  profile: {
    height: 200,
    width: 200,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  edit: {
    color: "blue",
    marginTop: 20,
  },
});
