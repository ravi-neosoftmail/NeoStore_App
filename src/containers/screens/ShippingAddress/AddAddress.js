import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import normalize from 'react-native-normalize';
import AddressTextInput from './AddressTextInput';
import GenericButton from '../../../component/GenericButton';
import {addressValidator, cityValidator, countryValidator, errorValidator, landMarkValidator, pinCodeValidator, stateValidator} from '../../../component/Validator';
import {useDispatch, useSelector} from 'react-redux';
import {
  addAddressRequest,
  getUserAddressRequest,
} from '../../../redux/action/action';


/**
 * 
 * @param {*} param0 navigation which is used to navigate between screens.
 * @description This is a Add Address screen which requires user Address details.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */


export default function AddAddress({navigation}) {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.userData.user);

  const {token} = userData;

  const [addressData, setAddressData] = useState({
    landMark: '',
    addressLine: '',
    pincode: '',
    city: '',
    state: '',
    country: '',
    error: {},
  });

  const handleAddress = () => {
    let errorOccur = errorValidator(addressData);

    let payload = {
      addressLine: addressData.addressLine,
      pincode: addressData.pincode,
      city: addressData.city,
      state: addressData.state,
      country: addressData.country,
    };

    if (
      Object.keys(errorOccur).length === 0 &&
      errorOccur.constructor === Object
    ) {
      dispatch(addAddressRequest({payload, navigation, token, getAddress}));
      setAddressData({...addressData, error: errorOccur});
    } else {
      setAddressData({...addressData, error: errorOccur});
    }
  };

  const getAddress = () => {
    dispatch(getUserAddressRequest(token));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : null}
      enabled
      keyboardVerticalOffset={60}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}> NeoStore </Text>
        </View>
        <AddressTextInput
          label="Address"
          placeHolder="Enter Address"
          value={addressData.addressLine}
          // onChangeText={val =>
          // setAddressData({...addressData, addressLine: val})
          // }
         onChangeText={val => {
              addressValidator(val, addressData);
              setAddressData({...addressData, addressLine: val});
            }}
          error={addressData.error.addressLine}
        />
        <AddressTextInput
          label="Landmark"
          placeHolder="Enter Landmark"
          value={addressData.landMark}
          // onChangeText={val => setAddressData({...addressData, landMark: val})}
         onChangeText={val => {
              landMarkValidator(val, addressData);
              setAddressData({...addressData, landMark: val});
            }}
          error={addressData.error.landMark}
        />
        <AddressTextInput
          label="City"
          placeHolder="Enter City"
          value={addressData.city}
          // onChangeText={val => setAddressData({...addressData, city: val})}
         onChangeText={val => {
              cityValidator(val, addressData);
              setAddressData({...addressData, city: val});
            }}
          error={addressData.error.city}
        />
        <AddressTextInput
          label="Pin Code"
          placeHolder="Enter Pin Code"
          keyboardType="numeric"
          value={addressData.pincode}
          // onChangeText={val => setAddressData({...addressData, pincode: val})}
         onChangeText={val => {
              pinCodeValidator(val, addressData);
              setAddressData({...addressData, pincode: val});
            }}
          error={addressData.error.pincode}
        />
        <AddressTextInput
          label="State"
          placeHolder="Enter State"
          value={addressData.state}
          // onChangeText={val => setAddressData({...addressData, state: val})}
         onChangeText={val => {
              stateValidator(val, addressData);
              setAddressData({...addressData, state: val});
            }}
          error={addressData.error.state}
        />
        <AddressTextInput
          label="Country"
          placeHolder="Enter Country"
          value={addressData.country}
          // onChangeText={val => setAddressData({...addressData, country: val})}
         onChangeText={val => {
              countryValidator(val, addressData);
              setAddressData({...addressData, country: val});
            }}
          error={addressData.error.country}
        />
        <GenericButton title="Submit" onPress={handleAddress} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(20),
  },
  headerView: {
    alignItems: 'center',
    marginBottom: normalize(30),
    marginTop: normalize(20),
  },
  headerText: {
    fontSize: normalize(35),
    fontWeight: 'bold',
  },
});
