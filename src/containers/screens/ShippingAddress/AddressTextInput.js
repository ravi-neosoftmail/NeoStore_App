import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import normalize from 'react-native-normalize';
import {Colors} from '../../../assets/Colors';

export default function AddressTextInput(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{props.label}</Text>
      <TextInput
        placeholder={props.placeHolder}
        style={styles.textInput}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      {props.error?
      <Text style={styles.errorText}>{props.error}</Text>
      :
      null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: normalize(15),
  },
  labelText: {
    paddingLeft: 5,
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  textInput: {
    height: normalize(40),
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 5,
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
  errorText: {
    paddingLeft: 5,
    fontSize: normalize(13),
    color: Colors.red,
  },
});
