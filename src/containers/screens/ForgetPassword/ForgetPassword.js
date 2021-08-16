import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import GenericTextInput from "../../../component/GenericTextInput";
import GenericButton from "../../../component/GenericButton";
import normalize from "react-native-normalize";

/**
 * 
 * @param {*} param0 
 * @description This is a Forget Password screen which requires user authentication regularly performed by entering a useremail.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function ForgetPassword() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.headingText}> NeoStore </Text>
            <View style={styles.forgotPasswordView}>
              <Text style={styles.forgotPasswordText}>Forgot Password? </Text>
            </View>
            <GenericTextInput placeHolder="Enter Userid" iconName="user" />
            <GenericButton title="Submit" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  headingText: {
    alignSelf: "center",
    fontSize: normalize(40),
    marginBottom: 30,
    fontWeight: "bold",
  },
  forgotPasswordView: {
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
