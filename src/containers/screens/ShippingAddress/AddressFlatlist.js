import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import normalize from 'react-native-normalize';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../../assets/Colors';
import {delAddressRequest, saveUserAddress} from '../../../redux/action/action';
import {getUserAddressRequest} from '../../../redux/action/action';

/**
 *
 * @param {*} param0 navigation which is used to navigate between screens.
 * userAddress which contains the user address data.
 * @description This is a Address Flatlist screen which shows the UI of all the Users Address.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function AddressFlatlist({userAddress, navigation}) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData.user);
  const cart = useSelector(state => state.cartProduct.cartProduct);


  const {token} = userData;

  const showAlert = id => {
    Alert.alert('Are you sure you want to remove this address?', '', [
      {
        text: 'Cancel',
      },
      {
        text: 'Remove',
        onPress: () => {
          dispatch(delAddressRequest({payload: id, token, getAddress}));
        },
      },
    ]);
  };

  const getAddress = () => {
    dispatch(getUserAddressRequest(token));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={userAddress}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.flatlistContainer}
            onPress={() => {
              let payload = {
                address: item.addressLine,
                city: item.city,
                pincode: item.pincode,
                state: item.state,
                country: item.country,
                id: item._id,
              };
              dispatch(saveUserAddress(payload));
              {
                cart?.products?.length >= 1
                  ? navigation.navigate('Place Order')
                  : Alert.alert('Add some Product in Cart first', '', [
                      {
                        text: 'Ok',
                      },
                    ]);
              }
            }}>
            <View style={styles.addressView}>
              <Text style={styles.addressText}>
                {item.addressLine}, {item.state} - {item.pincode},{' '}
                {item.country}
              </Text>
            </View>

            <View style={styles.bottomView}>
              <TouchableOpacity
                style={styles.bottomOptionTouchable}
                activeOpacity={0.6}
                onPress={() =>
                  navigation.navigate('Edit Address', {
                    address: item.addressLine,
                    city: item.city,
                    pincode: item.pincode,
                    state: item.state,
                    country: item.country,
                    id: item._id,
                  })
                }>
                <Text style={styles.optionText}> Edit </Text>
              </TouchableOpacity>

              <View style={styles.separatorView}></View>

              <TouchableOpacity
                style={styles.bottomOptionTouchable}
                activeOpacity={0.6}
                onPress={() => showAlert(item._id)}>
                <Text style={styles.optionText}> Remove </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginBottom: normalize(10),
  },
  flatlistContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: normalize(15),
  },
  addressView: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgray,
    padding: normalize(15),
    paddingBottom: 10,
  },
  addressText: {
    fontSize: normalize(15),
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomOptionTouchable: {
    width: '45%',
    padding: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorView: {
    borderEndWidth: 1,
    height: '100%',
    borderColor: Colors.lightgray,
  },
  optionText: {
    fontSize: normalize(15),
    fontWeight: 'bold',
  },
});
