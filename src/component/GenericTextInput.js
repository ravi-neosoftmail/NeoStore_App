import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../assets/Colors';



/**
 *
 * @param {*} param0 props in which all the functionality of TextInput is provided by the child.
 * @description This is Generic Text Input component which is used for code reusability.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a UI (User Interface) of the Text Input should appear.
 */


export default function GenericTextInput(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <Icon
          name={props.iconName}
          size={
            props.iconName === 'envelope'
              ? 15
              : props.iconName === 'mobile-phone'
              ? 25
              : 20
          }
          color={Colors.purple}
        />
        <TextInput
          style={styles.textInput}
          placeholder={props.placeHolder}
          keyboardType={props.keyboardType}
          maxLength={props.maxLength}
          secureTextEntry={props.secure}
          value={props.value}
          onChangeText={props.onChangeText}
        />
        {props.type === 'password' ? (
          <TouchableOpacity
            onPress={() => props.setVisible(!props.visible)}
            style={styles.passwordTouchableIcon}>
            <Icon
              name={props.visible ? 'eye' : 'eye-slash'}
              size={20}
              color={Colors.purple}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {props.error ? (
        <Text style={styles.errorText}> {props.error} </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  textInputView: {
    flexDirection: 'row',
    // borderWidth: 1,
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    height: normalize(50),
    width: '80%',
    paddingLeft: 5,
    marginLeft: 10,
    marginRight: 5,
  },
  errorText: {
    color: Colors.red,
  },
  passwordTouchableIcon: {
    position: 'absolute',
    right: 10,
  },
});
