import React from "react";
import { Text, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function ActivityPreview() {
  return (
    <Card>
      <Card.Cover
        source={require("../assets/default-thumbnail-pic.jpeg")}
      ></Card.Cover>
      <Card.Content>
        <Title>Name</Title>
        <Paragraph>Date | Time</Paragraph>
      </Card.Content>
    </Card>
  );
}

//const styles = StyleSheet.create({});
