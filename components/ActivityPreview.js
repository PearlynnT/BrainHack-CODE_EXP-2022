import React from "react";
import { Text, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import activity from "../activity";

const activityAsObject = activity.map((activity) => {
  return {
    activity: activity,
  };
});

export default function ActivityPreview() {
  return (
    <Card>
      <Card.Cover
        source={require("../assets/default-thumbnail-pic.jpeg")}
      ></Card.Cover>
      <Card.Content>
        <Title>{activity.activityName}</Title>
        <Paragraph>Date | Time</Paragraph>
      </Card.Content>
    </Card>
  );
}

//const styles = StyleSheet.create({});
