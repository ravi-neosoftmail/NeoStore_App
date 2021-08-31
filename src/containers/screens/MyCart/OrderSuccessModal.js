import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../assets/Colors';
import LottieView from 'lottie-react-native';
import {getCartProductRequest} from '../../../redux/action/action';
import {useDispatch, useSelector} from 'react-redux';

/**
 *
 * @param {*} param0 navigation which is used to navigate between screens.
 * modalVisible returns the value true and false
 * setModalVisible is a function which is used to set the modalVisible false.
 * @description This is Order Success Modal screen which shows the animation of order succeess.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function OrderSuccessModal({
  modalVisible,
  setModalVisible,
  navigation,
}) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData.user);
  const {token} = userData;

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> Order Placed Successfully</Text>
            <TouchableOpacity
              style={styles.crossTouchable}
              onPress={() => {
                setModalVisible(!modalVisible);
                dispatch(getCartProductRequest(token));
                navigation.navigate('Dashboard');
              }}>
              <Icon name="cross" size={30} />
            </TouchableOpacity>
            <View
              style={{
                height: 250,
                width: 200,
                justifyContent: 'center',
              }}>
              <LottieView
                source={require('../../../assets/animation/orderSuccess.json')}
                autoPlay
                loop
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  crossTouchable: {
    borderRadius: 50,
    backgroundColor: Colors.lightgray,
    borderColor: Colors.lightgray,
    position: 'absolute',
    right: -12,
    top: -10,
  },
  termsText: {
    fontSize: normalize(20),
  },
});
