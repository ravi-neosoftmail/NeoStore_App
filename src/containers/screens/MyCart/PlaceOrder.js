import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import GenericButton from '../../../component/GenericButton';
import {useDispatch, useSelector} from 'react-redux';
import PlaceOrderFlatlist from './PlaceOrderFlatlist';
import {Colors} from '../../../assets/Colors';
import normalize from 'react-native-normalize';
import {
  getCartProductRequest,
  getOrderListRequest,
  placeOrderRequest,
} from '../../../redux/action/action';
import OrderSuccessModal from './OrderSuccessModal';
import RazorpayCheckout from 'react-native-razorpay';
import PushNotification from 'react-native-push-notification';
import Toast from 'react-native-toast-message';

/**
 *
 * @param {*} param0 navigation which is used to navigate between screens.
 * @description This is a Place Order screen which have the details of user products to place order.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function PlaceOrder({navigation}) {
  const dispatch = useDispatch();

  const deliveryAddress = useSelector(
    state => state.deliveryAddress.deliveryAddress,
  );
  const userData = useSelector(state => state.userData.user);
  const userAddress = useSelector(state => state.userAddress.userAddress);
  const {token} = userData;
  const [modalVisible, setModalVisible] = useState(false);
  const cart = useSelector(state => state.cartProduct.cartProduct);
  const {products, grandTotal} = cart;

  const getOrder = () => {
    dispatch(getOrderListRequest(token));
    setModalVisible(true);
  };

  const handlePayment = () => {
    var options = {
      description: 'Product Order Details',
      image: products[0].productId.mainImage,
      currency: 'INR',
      key: 'rzp_test_T5Vt4IEml2A7hU',
      amount: grandTotal,
      name: products[0].productId.name,
      order_id: '',
      prefill: {
        email: userData.email,
        contact: userData.mobile,
        name: userData.firstName,
      },
      theme: {color: '#53a20e'},
    };

    let payload = {
      addressId: deliveryAddress.id,
    };

    if (
      userAddress?.address?.length === 0 ||
      Object.keys(deliveryAddress).length === 0
    ) {
      alert('Please add address first');
    } else {
      RazorpayCheckout.open(options)
        .then(data => {
          dispatch(placeOrderRequest({payload, token, getOrder}));
          PushNotification.localNotification({
            channelId: 'channel-id',
            title: 'Order confirmation',
            message: products[0].productId.name,
            picture: products[0].productId.mainImage,
          });
        })
        .catch(error => {
          Toast.show({
            type: 'error',
            position: 'bottom',
            text1: error.description,
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.changeAddressView}>
          {Object.keys(deliveryAddress).length === 0 ||
          userAddress?.address?.length === 0 ? null : (
            <View style={styles.addressView}>
              <Text style={styles.addressText}>
                {deliveryAddress.address}, {deliveryAddress.state} -{' '}
                {deliveryAddress.pincode}, {deliveryAddress.country}
              </Text>
            </View>
          )}
          <GenericButton
            title={
              userAddress?.address?.length === 0 ||
              Object.keys(deliveryAddress).length === 0
                ? 'Add Address'
                : 'Change Address'
            }
            onPress={() => navigation.navigate('Shipping Address')}
          />
        </View>

        <PlaceOrderFlatlist />
      </ScrollView>
      <TouchableOpacity
        style={styles.placeOrderTouchable}
        activeOpacity={0.8}
        // onPress={handlePlaceOrder}
        onPress={handlePayment}>
        <Text style={styles.placeOrderText}> Order Now </Text>
      </TouchableOpacity>
      {modalVisible ? (
        <OrderSuccessModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          navigation={navigation}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  changeAddressView: {
    borderBottomWidth: 1,
    padding: 15,
    borderColor: Colors.lightgray,
  },
  placeOrderTouchable: {
    height: normalize(60),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.red,
  },
  placeOrderText: {
    fontWeight: 'bold',
    fontSize: normalize(20),
    color: Colors.white,
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
});
