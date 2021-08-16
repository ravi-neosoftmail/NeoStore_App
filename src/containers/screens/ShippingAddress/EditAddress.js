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
import {cityValidator, countryValidator, errorValidator, pinCodeValidator, stateValidator, addressValidator, editAddressValidator} from '../../../component/Validator';
import {useDispatch, useSelector} from 'react-redux';
import {updateAddressRequest} from '../../../redux/action/action';
import {getUserAddressRequest} from '../../../redux/action/action';

export default function EditAddress(props) {
  const dispatch = useDispatch();

  const {address, city, pincode, state, country, id} = props.route.params;
  const userData = useSelector(state => state.userData.user);

  const {navigation} = props;

  const {token} = userData;

  const [editAddress, setEditAddress] = useState({
    address: address,
    city: city,
    pincode: pincode.toString(),
    state: state,
    country: country,
    error: {},
  });

  const handleUpdate = () => {
    let errorOccur = errorValidator(editAddress);

    let payload = {
      addressLine: editAddress.address,
      city: editAddress.city,
      pincode: editAddress.pincode,
      state: editAddress.state,
      country: editAddress.country,
    };

    dispatch(
      updateAddressRequest({payload, token, id, navigation, getAddress}),
    );

    // if (
    //   Object.keys(errorOccur).length === 0 &&
    //   errorOccur.constructor === Object
    // ) {
    //   dispatch(
    //     updateAddressRequest({payload, token, id, navigation, getAddress}),
    //   );
    //   setEditAddress({...editAddress, error: errorOccur});
    // } else {
    //   setEditAddress({...editAddress, error: errorOccur});
    // }
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
          value={editAddress.address}
          // onChangeText={val => setEditAddress({...editAddress, address: val})}
          onChangeText={val => {
              editAddressValidator(val, editAddress);
              setEditAddress({...editAddress, address: val});
            }}
          error={editAddress.error.address}
        />
        <AddressTextInput
          label="City"
          placeHolder="Enter City"
          value={editAddress.city}
          // onChangeText={val => setEditAddress({...editAddress, city: val})}
          onChangeText={val => {
              cityValidator(val, editAddress);
              setEditAddress({...editAddress, city: val});
            }}
          error={editAddress.error.city}
        />
        <AddressTextInput
          label="Pin Code"
          placeHolder="Enter Pin Code"
          // keyboardType="numeric"
          value={editAddress.pincode}
          // onChangeText={val => setEditAddress({...editAddress, pincode: val})}
          onChangeText={val => {
              pinCodeValidator(val, editAddress);
              setEditAddress({...editAddress, pincode: val});
            }}
          error={editAddress.error.pincode}
        />
        <AddressTextInput
          label="State"
          placeHolder="Enter State"
          value={editAddress.state}
          // onChangeText={val => setEditAddress({...editAddress, state: val})}
          onChangeText={val => {
              stateValidator(val, editAddress);
              setEditAddress({...editAddress, state: val});
            }}
          error={editAddress.error.state}
        />
        <AddressTextInput
          label="Country"
          placeHolder="Enter Country"
          value={editAddress.country}
          // onChangeText={val => setEditAddress({...editAddress, country: val})}
          onChangeText={val => {
              countryValidator(val, editAddress);
              setEditAddress({...editAddress, country: val});
            }}
          error={editAddress.error.country}
        />
        <GenericButton title="Submit" onPress={handleUpdate} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(15),
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
