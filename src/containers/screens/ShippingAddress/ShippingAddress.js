import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import normalize from 'react-native-normalize';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../../assets/Colors';
import {getUserAddressRequest} from '../../../redux/action/action';
import AddressFlatlist from './AddressFlatlist';


/**
 * 
 * @param {*} param0 navigation which is used to navigate between screens.
 * @description This is a Shipping Address screen which shows all the user address.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */



export default function ShippingAddress({navigation}) {
  const dispatch = useDispatch();

  const userAddress = useSelector(state => state.userAddress.userAddress);
  const isLoading = useSelector(state => state.userAddress.isLoading);
  const userData = useSelector(state => state.userData.user);

  useEffect(() => {
    dispatch(getUserAddressRequest(userData.token));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={50} color={Colors.skyblue} />
      ) : (
        <AddressFlatlist
          navigation={navigation}
          userAddress={userAddress.address}
        />
      )}
      <TouchableOpacity
        style={styles.addTouchable}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Add Address')}>
        <Text style={styles.plusText}> + </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.lightgray,
  },
  addTouchable: {
    height: normalize(80),
    width: normalize(80),
    borderRadius: 50,
    position: 'absolute',
    right: normalize(25),
    bottom: normalize(25),
    backgroundColor: Colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    fontSize: normalize(40),
    color: Colors.white,
  },
});
