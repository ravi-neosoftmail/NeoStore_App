import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {Colors} from '../../../assets/Colors';
import normalize from 'react-native-normalize';
import {useSelector} from 'react-redux';


/**
 *
 * @param {*} param0 
 * @description This is a Place Order Flatlist screen which used to create a Ui of place order products cards.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */


export default function PlaceOrderFlatlist() {
  const cart = useSelector(state => state.cartProduct.cartProduct);
  const {products, grandTotal} = cart;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.flatlistContainerView}>
            <Image
              style={styles.image}
              source={{uri: item.productId.mainImage}}
            />
            <View style={styles.detailsView}>
              <Text style={styles.textStyle}>{item.productId.name}</Text>
              <View style={styles.priceView}>
                <Text style={styles.textStyle}>Price : {item.productId.price}</Text>
              </View>
              <View style={styles.priceView}>
                <Text style={styles.textStyle}>Quantity : {item.quantity}</Text>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.priceDetailFlatlistContainer}>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (
            <Text style={styles.flatlistHeaderText}>Price Details</Text>
          )}
          renderItem={({item}) => (
            <View style={styles.flatlistContainer}>
              <View style={styles.priceDetailView}>
                <Text style={{fontSize: normalize(15)}}>
                  {item.productId.name}
                </Text>
                <Text style={{marginTop: 5}}>Quantity - {item.quantity} </Text>
              </View>

              <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: normalize(15)}}>
                  Rs.{item.totalAmount}
                </Text>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.totalAmountView}>
        <Text style={styles.totalAmountText}>Total amount</Text>
        <Text style={styles.totalAmountText}>Rs.{grandTotal}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
    backgroundColor: Colors.lightgrey,
  },
  flatlistContainerView: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    height: normalize(120),
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  image: {
    height: normalize(100),
    width: normalize(110),
  },
  detailsView: {
    width: normalize(220),
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
  priceDetailFlatlistContainer: {
    borderTopWidth: 1,
    marginTop: 10,
    flex: 1,
    borderColor: Colors.lightgray,
  },
  flatlistHeaderText: {
    margin: 10,
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  flatlistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  priceDetailView: {
    width: '70%',
  },
  totalAmountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  totalAmountText: {
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
});
