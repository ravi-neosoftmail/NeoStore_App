import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import normalize from "react-native-normalize";
import GenericTextInput from "../../../component/GenericTextInput";
import GenericButton from "../../../component/GenericButton";
import { ConfirmNewPasswordValidator, newPasswordValidator, passwordValidator } from "../../../component/Validator";
import { changePasswordRequest } from "../../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

export default function SetPassword({ navigation }) {

  const dispatch = useDispatch();

  const [oldVisible, setOldVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const userData = useSelector(state => state.userData.user);
  const {token} = userData;

  const [resetData, setResetData] = useState({
    password: '',
    newPassword: '',
    confirmNewPassword: '',
    error: {}
  })


  const handleResetPassword = () => {
    let payload = {
      password: resetData.password,
      newPassword: resetData.newPassword
    };

      dispatch(changePasswordRequest({payload, token, getMessage}));

    // if (
    //   Object.keys(errorOccur).length === 0 &&
    //   errorOccur.constructor === Object
    // ) {
    //   dispatch(changePasswordRequest({payload, token, getMessage}));
    //   setResetData({...resetData, error: errorOccur});
    // } else {
    //   setResetData({...resetData, error: errorOccur});
    // }
  }

  const getMessage = (message) => {
    if(message === 'Password Changed Successfully'){
      setResetData({
        password: '',
        newPassword: '',
        confirmNewPassword: '',
        error: {}
      })
    }
    alert(message)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.headingText}> NeoStore </Text>
            <GenericTextInput 
              placeHolder="Old Password" 
              iconName="lock" 
              type='password'
              value={resetData.password}
              // onChangeText={val =>
              //   setResetData({...resetData, password: val})
              // }
              onChangeText = {val => {
                passwordValidator(val, resetData)
                setResetData({...resetData, password: val})
              }}
              error={resetData.error.password}
              secure={oldVisible ? false : true}
              setVisible={setOldVisible}
              visible={oldVisible}
            />
            <GenericTextInput
              placeHolder="New Password"
              iconName="lock"
              type="password"
              value={resetData.newPassword}
              // onChangeText={val =>
              //   setResetData({...resetData, newPassword: val})
              // }
              onChangeText = {val => {
                newPasswordValidator(val, resetData)
                setResetData({...resetData, newPassword: val})
              }}
              error={resetData.error.newPassword}
              secure={visible ? false : true}
              setVisible={setVisible}
              visible={visible}
            />

            <GenericTextInput
              placeHolder="Confirm New Password"
              iconName="lock"
              type="password"
              value={resetData.confirmNewPassword}
              // onChangeText={val =>
              //   setResetData({...resetData, confirmNewPassword: val})
              // }
              onChangeText = {val => {
                ConfirmNewPasswordValidator(val, resetData)
                setResetData({...resetData, confirmNewPassword: val})
              }}
              error={resetData.error.confirmNewPassword}
              secure={passwordVisible ? false : true}
              setVisible={setPasswordVisible}
              visible={passwordVisible}
            />

            <GenericButton title="Submit" onPress={() =>handleResetPassword()}/>
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
});
