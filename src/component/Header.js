import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header({ title, navigation }) {
    console.log(navigation);
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress = {() => navigation.goBack()}
    >
        <Icon name="arrow-back" size={25} />
      </TouchableOpacity>
      <Text style={styles.headerText}> {title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    height: normalize(40),
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: normalize(25),
    fontWeight: "bold",
    marginLeft: normalize(80),
  },
});
