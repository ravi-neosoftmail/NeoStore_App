import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../../assets/Colors';
import normalize from 'react-native-normalize';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 *
 * @param {*} param0 props in which contains navigation and information of Products category nad also the type of product.
 * @description This is a Products Flatlist screen which shows the UI of the prducts card.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function ProductListFlatlist({productListData, navigation}) {
  return (
    <View style={styles.container}>
      {productListData?.length === 0 ? (
        <Text style={styles.noProductsText}>No Products available</Text>
      ) : (
        <FlatList
          data={productListData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.flatlistContainerView}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('Product Details', {
                  item,
                })
              }>
              <Image
                style={styles.image}
                source={
                  item.mainImage
                    ? {uri: item.mainImage}
                    : require('../../../assets/Images/Sofa.jpeg')
                }
              />
              <View style={styles.detailsView}>
                <View style={{}}>
                  <Text style={styles.textStyle}>{item.name}</Text>
                </View>
                <View style={styles.categoryView}>
                  <Text>{item.category.name}</Text>
                </View>

                <View style={styles.priceView}>
                  <View>
                    <Text style={styles.textStyle}>Rs.{item.price} </Text>
                  </View>

                  <View>
                    <Stars
                      default={item.avgRating}
                      count={5}
                      half={true}
                      disabled
                      fullStar={
                        <Icon
                          name={'star'}
                          style={[styles.myStarStyle]}
                          size={20}
                        />
                      }
                      emptyStar={
                        <Icon
                          name={'star-outline'}
                          size={20}
                          style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                        />
                      }
                      halfStar={
                        <Icon
                          name={'star-half'}
                          size={20}
                          style={[styles.myStarStyle]}
                        />
                      }
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.lightgrey,
    justifyContent: 'center',
  },
  noProductsText: {
    alignSelf: 'center',
    fontSize: normalize(25),
    fontWeight: '700',
    color: Colors.gray,
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
    width: normalize(220),
    marginLeft: 10,
    padding: 2,
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 3,
    width: 180,
    width: '90%',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
  },
  categoryView: {
    marginTop: normalize(8),
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});
