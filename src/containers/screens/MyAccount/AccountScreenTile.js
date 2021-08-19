import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import normalize from 'react-native-normalize';
import { Colors } from '../../../assets/Colors';


/**
 *
 * @param {*} param0 props in which onPress funtionality, Icon name, Icon title and arrow Icon name.
 * @description This is a Account Screen Tile screen which requires Icon name, title and onPress functionality.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */


export default function AccountScreenTile(props) {
  return (
    <TouchableOpacity 
        style={styles.container} 
        activeOpacity={0.7}
        onPress={props.onPress}
    >
      <Icon name={props.iconName} size={25} color={Colors.purple}/>
      <Text style={styles.textStyle}> {props.title} </Text>
      <View style={styles.aroowIconView}>
        <Icon name={props.arrowIconName} size={25} color={Colors.skyblue}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: normalize(12),
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: normalize(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: normalize(20),
    marginLeft: 10,
  },
  aroowIconView: {
    position: 'absolute',
    right: 10,
  },
});
