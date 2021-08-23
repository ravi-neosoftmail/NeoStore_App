import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import ProductListFlatlist from '../ProductList/ProductListFlatlist';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  dashboardFilter,
  filterCategory,
  productListRequest,
} from '../../../redux/action/action';
import {Colors} from '../../../assets/Colors';
import Swiper from 'react-native-swiper';

/**
 *
 * @param {*} param0 navigation which is used to navigate between screens.
 * @description This is a Dashboard screen which shows the top products for a user.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const productListData = useSelector(
    state => state.productList.productListData,
  );

  const topProducts = useSelector(state => state.productList.topProducts);

  const isLoading = useSelector(state => state.productList.isLoading);

  useEffect(() => {
    dispatch(productListRequest());
  }, []);

  useEffect(() => {
    if (productListData) {
      dispatch(dashboardFilter());
    }
  }, [productListData]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchBoxView}
        onPress={() => navigation.navigate('Search Product')}
        activeOpacity={0.9}>
        <Icons name="search" size={30} />
        <View style={styles.searchBoxTextView}>
          <Text style={{color: Colors.gray}}>Search Product </Text>
        </View>
      </TouchableOpacity>
      <View style={{width: '100%', height: 260}}>
        <Swiper autoplay loop height={250}>
          <TouchableOpacity
            onPress={() => {
              dispatch(filterCategory('Bed'));
              navigation.navigate('All Products');
            }}>
            <Image
              style={styles.swiperImage}
              source={require('../../../assets/Images/bed.jpeg')}
              resizeMode="cover"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              dispatch(filterCategory('Chair'));
              navigation.navigate('All Products');
            }}>
            <Image
              style={styles.swiperImage}
              source={require('../../../assets/Images/Chair.png')}
              resizeMode="stretch"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              dispatch(filterCategory('Sofa'));
              navigation.navigate('All Products');
            }}>
            <Image
              style={styles.swiperImage}
              source={require('../../../assets/Images/Sofa.jpeg')}
              resizeMode="cover"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              dispatch(filterCategory('Table'));
              navigation.navigate('All Products');
            }}>
            <Image
              style={styles.swiperImage}
              source={require('../../../assets/Images/Table.jpeg')}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </Swiper>
      </View>

      <View style={styles.productsHeaderView}>
        <Text style={styles.productsHeaderText}> Top Products for you </Text>
      </View>
      {isLoading ? (
        <View style={styles.loaderView}>
          <ActivityIndicator size={30} color={Colors.skyblue} />
        </View>
      ) : (
        <ProductListFlatlist
          productListData={topProducts}
          navigation={navigation}
          type="dashboard"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBoxView: {
    marginBottom: 5,
    marginTop: 5,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    paddingLeft: 5,
    backgroundColor: 'lightgray',
    height: 40,
    alignItems: 'center',
  },
  searchBoxTextView: {
    width: '90%',
    justifyContent: 'center',
    height: 40,
    marginLeft: 10,
  },
  slideBoxPagination: {
    position: 'absolute',
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  slideBoxDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.92)',
  },
  productsHeaderView: {},
  productsHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  swiperImage: {
    height: '100%',
    width: '100%',
  },
  loaderView: {
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.5,
    borderWidth: 2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
