import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import normalize from 'react-native-normalize';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../../assets/Colors';
import {getCartProductRequest} from '../../../redux/action/action';
import MyCartFlatlist from './MyCartFlatlist';

export default function MyCart({navigation}) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData.user);

  const cart = useSelector(state => state.cartProduct.cartProduct);
  const isLoading = useSelector(state => state.cartProduct.isLoading);

  const {products, grandTotal} = cart;

  const {token} = userData;

  useEffect(() => {
    dispatch(getCartProductRequest(token));
  }, []);

  return (
    <View style={styles.container}>
      {grandTotal === 0 ? (
        <View style={styles.emptyCartView}>
          <Image
            source={require('../../../assets/Images/emptyCart.png')}
            style={styles.emptyCartImage}
          />
          <Text style={styles.emptyCartText}>Cart is Empty</Text>
        </View>
      ) : isLoading ? (
        <ActivityIndicator size={50} color={Colors.skyblue} />
      ) : (
        <MyCartFlatlist products={products} navigation={navigation} />
      )}

      {grandTotal === 0 ? null : (
        <View style={styles.bottomContainerView}>
          <View style={styles.toalAmountView}>
            <Text style={styles.totalAmountText}>Total Amount : </Text>
            <Text style={styles.totalPriceText}>Rs.{grandTotal} </Text>
          </View>

          <TouchableOpacity
            style={styles.placeOrderTouchable}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Place Order')}>
            <Text style={styles.placeOrderText}> Place Order </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  emptyCartView: {
    alignItems: 'center',
  },
  emptyCartImage: {
    height: normalize(180),
    width: normalize(300),
  },
  emptyCartText: {
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
  bottomContainerView: {
    position: 'absolute',
    bottom: 0,
    height: normalize(100),
    width: '100%',
  },
  toalAmountView: {
    flexDirection: 'row',
    height: normalize(40),
    alignItems: 'center',
    paddingLeft: normalize(10),
    backgroundColor: 'white',
  },
  totalAmountText: {
    fontWeight: 'bold',
    fontSize: normalize(15),
  },
  totalPriceText: {
    fontWeight: '500',
    fontSize: normalize(15),
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
});
