import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import normalize from 'react-native-normalize';
import { Colors } from '../assets/Colors';


/**
 *
 * @param {*} param0 props in which all the functionality of button is provided by the child.
 * @description This is Generic button component which is used for code reusability.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a button of the UI (User Interface) should appear.
 */


export default function GenericButton(props) {
    return (
        <TouchableOpacity
            style={styles.buttonTouchable}
            activeOpacity={0.5}
            onPress ={props.onPress}
        >
            <Text style={styles.buttonText}> {props.title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonTouchable:{
        alignItems:'center',
        justifyContent: 'center',
        marginBottom:10,
        height: normalize(40),
        borderRadius:10,
        marginTop:25,
        backgroundColor: Colors.purple
    },
    buttonText:{
        fontSize: normalize(18),
        fontWeight:'bold',
        color: Colors.white
    }
})