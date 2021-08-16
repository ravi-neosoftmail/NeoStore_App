import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors} from '../../../assets/Colors';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  delCartProductRequest,
  getCartProductRequest,
  updateProductQuantityRequest,
} from '../../../redux/action/action';

export default function MyCartFlatlist(props) {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.userData.user);

  const {token} = userData;

  const handleCart = id => {
    Alert.alert('Are you sure you want to remove this product?', '', [
      {
        text: 'Cancel',
      },
      {
        text: 'Remove',
        onPress: () => {
          dispatch(delCartProductRequest({payload: id, token, getCart}));
        },
      },
    ]);
  };

  const handleQuantity = ({item, type}) => {
    let id = {
      id: item.id,
    };
    if (type === 'add') {
      let payload = {
        quantity: item.quantity + 1,
      };

      dispatch(updateProductQuantityRequest({payload, id, token, getCart}));
    }

    if (type === 'subtract') {
      let payload = {
        quantity: item.quantity - 1,
      };

      if (item.quantity > 1) {
        dispatch(updateProductQuantityRequest({payload, id, token, getCart}));
      }
    }
  };

  const getCart = () => {
    dispatch(getCartProductRequest(token));
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={props.products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.flatlistContainerView}
            activeOpacity={0.8}
            // onPress={() =>
            //   props.navigation.navigate('Product Details', {
            //     item,
            //   })
            // }
          >
            <Image
              style={styles.image}
              source={{uri: item.productId.mainImage}}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={styles.detailsView}>
                <Text style={styles.textStyle}>{item.productId.name}</Text>
                <View style={styles.priceView}>
                  <Text style={styles.textStyle}>
                    Price : {item.totalAmount}
                  </Text>
                </View>
                <View style={styles.servesView}>
                  <Text
                    style={[styles.quantityText, {marginRight: normalize(15)}]}>
                    {' '}
                    Add Quantitiy{' '}
                  </Text>
                  <View style={styles.servesDataView}>
                    <TouchableOpacity
                      style={styles.minusTouchable}
                      onPress={() => handleQuantity({item, type: 'subtract'})}>
                      <Text style={styles.quantityText}> - </Text>
                    </TouchableOpacity>

                    <View style={styles.servesDataTouchable}>
                      <Text style={styles.quantityText}> {item.quantity} </Text>
                    </View>
                    <TouchableOpacity
                      style={styles.minusTouchable}
                      onPress={() => handleQuantity({item, type: 'add'})}>
                      <Text style={styles.quantityText}> + </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={styles.deleteTouchable}
                onPress={() => handleCart(item.id)}>
                <Icon name="delete" size={25} />
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
    flex: 1,
    padding: 10,
    backgroundColor: Colors.lightgrey,
  },
  flatlistContainerView: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    height: normalize(120),
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    height: normalize(100),
    width: normalize(110),
  },
  detailsView: {
    width: normalize(200),
    marginLeft: 10,
    padding: 2,
  },
  priceView: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  servesView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  servesDataView: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    width: '35%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'lightgray',
  },
  minusTouchable: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  servesDataTouchable: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  quantityText: {
    fontSize: normalize(15),
    fontWeight: 'bold',
  },
  deleteTouchable: {
    width: normalize(25),
    height: normalize(35),
  },
});
