import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import normalize from "react-native-normalize";
import Icon from "react-native-vector-icons/Entypo";
import { Colors } from "../../../assets/Colors";


/**
 *
 * @param {*} param0 maodalVisible which contains the maodal value true or false.
 * setMaodalVisible which is used to set the maodal value true or false.
 * @description This is a Registration Modal component which shows the terms and conditions.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */


const RegistrationModal = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Terms & Conditions</Text>
            <TouchableOpacity
              style={styles.crossTouchable}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon name="cross" size={30} />
            </TouchableOpacity>
            <Text style={styles.termsText}>
              A set of legal terms, such as Terms of Use, Terms of Service, or
              Terms and Conditions, is a legal agreement between you and your
              users. Legal terms establish the rights and responsibilities of
              both parties. Those rights and responsibilities include any rules
              that users must agree to before using your website or mobile app.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  crossTouchable: {
    borderRadius: 50,
    backgroundColor: Colors.lightgray,
    borderColor: Colors.lightgray,
    position: "absolute",
    right: -12,
    top: -10,
  },
  termsText: {
    fontSize: normalize(20),
  },
});

export default RegistrationModal;
