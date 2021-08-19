import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
  Alert,
  Image,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Colors} from '../../../assets/Colors';
import normalize from 'react-native-normalize';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addCartProductRequest,
  getCartProductRequest,
} from '../../../redux/action/action';
import RateModal from './RateModal';
import Swiper from 'react-native-swiper';
import Toast from 'react-native-toast-message';
import Cart from 'react-native-vector-icons/Feather';

/**
 *
 * @param {*} param0 props in which contains navigation and information of Products.
 * @description This is a All Products Details screen which shows the details of an individual product and also have some for filtered the product on the basis of category, color, rating and price.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */



export default function ProductDetails(props) {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.userData.user);
  const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
  const [modalVisible, setModalVisible] = useState(false);

  const {token} = userData;

  const {
    subImages,
    name,
    category,
    price,
    color,
    avgRating,
    description,
    features,
    id,
    mainImage,
  } = props.route.params.item;

  const {navigation} = props;

  const [count, setCount] = useState(1);
  const onShare = async (name, mainImage) => {
    console.log(name, mainImage);
    try {
      await Share.share({
        url: mainImage,
        // message: name,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleQuantity = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleCart = (type) => {

    console.log(type);

    const payload = {
      productId: id,
      quantity: count,
    };

    dispatch(addCartProductRequest({payload, token, type, getCart, errorAlert}));
  };

  // const handleBuyNow = () => {
  //   const payload = {
  //     productId: id,
  //     quantity: count,
  //   };

  //   dispatch(addCartProductRequest({payload, token, getCart, errorAlert}));
  // };

  const showAlert = () => {
    Alert.alert('You need to Login first', '', [
      {
        text: 'Cancel',
      },
      {
        text: 'Login',
        onPress: () => {
          props.navigation.navigate('Login');
        },
      },
    ]);
  };

  const getCart = (type) => {
   console.log(type, 'getCart');
   if(type==='buy'){
     props.navigation.navigate('My Cart');
   }
    dispatch(getCartProductRequest(token));
    Toast.show({
      position: 'bottom',
      text1: 'Product successfully added',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  const errorAlert = (message, type) => {
    Toast.show({
      position: 'bottom',
      text1: message,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
    if(type==='buy'){
      props.navigation.navigate('My Cart');
    }
    // Alert.alert(message, '', [
    //   {
    //     text: 'Ok',
    //     onPress: () => {
    //       props.navigation.navigate('My Cart');
    //     },
    //   },
    // ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <SliderBox
          images={subImages}
          sliderBoxHeight={250}
          onCurrentImagePressed={() =>
            navigation.navigate('Zoom Image', {
              subImages,
            })
          }
          dotColor="blue"
          inactiveDotColor="#90A4AE"
          autoplays
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'contain'}
          paginationBoxStyle={styles.slideBoxPagination}
          dotStyle={styles.slideBoxDotStyle}
        />

        {/* <Swiper
       autoplay loop
       style={{
         height: 200,
         width: 100
       }}
       >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('All Products', {type: 'dashboardProduct'})
          }>
          <Image
            style={styles.swiperImage}
            source={{uri: subImages[0]}}
            // resizeMode="stretch"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('All Products', {type: 'dashboardProduct'})
          }>
          <Image
            style={styles.swiperImage}
            source={{uri: subImages[1]}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Swiper> */}

        <TouchableOpacity
          style={styles.shareTouchable}
          onPress={() => onShare(name,mainImage)}>
          <Icon name="share-variant" size={40} />
        </TouchableOpacity>

        <View style={styles.detailsContainerView}>
          <View style={styles.detailsSubContainerView}>
            <Text style={styles.productNameText}>
              {name} ({color.name})
            </Text>
            <View style={styles.categoryView}>
              <Text style={styles.categoryText}>Category : </Text>
              <Text style={styles.textStyle}>{category.name}</Text>
            </View>

            <View style={styles.productMainView}>
              <View style={styles.productView}>
                <Text style={styles.categoryText}>Price : </Text>
                <Text style={styles.priceText}>Rs.{price}</Text>
              </View>

              <View>
                <Stars
                  default={avgRating}
                  count={5}
                  half={true}
                  disabled
                  fullStar={
                    <Icon
                      name={'star'}
                      style={[styles.myStarStyle]}
                      size={25}
                    />
                  }
                  emptyStar={
                    <Icon
                      name={'star-outline'}
                      size={25}
                      style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                    />
                  }
                  halfStar={
                    <Icon
                      name={'star-half'}
                      size={25}
                      style={[styles.myStarStyle]}
                    />
                  }
                />
              </View>
            </View>
          </View>

          <View style={styles.highlightContaineriew}>
            <Text style={styles.hightlightText}>Highlights</Text>

            <View style={styles.productDescMainView}>
              <View style={styles.productDescView}>
                <Text style={styles.productDescText}>
                  {' '}
                  Product Description :{' '}
                </Text>
              </View>
              <View style={styles.productDescTextView}>
                <Text style={styles.textStyle}>{description} </Text>
              </View>
            </View>

            <View style={styles.productDescMainView}>
              <View style={styles.productDescView}>
                <Text style={styles.productDescText}>Product Features : </Text>
              </View>
              <View style={styles.productDescTextView}>
                <Text style={styles.textStyle}>{features} </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.servesView}>
          <Text style={[styles.quantityText, {marginRight: 20}]}>
            {' '}
            Add Quantitiy{' '}
          </Text>
          <View style={styles.servesDataView}>
            <TouchableOpacity
              style={styles.minusTouchable}
              onPress={handleQuantity}>
              <Text style={styles.quantityText}> - </Text>
            </TouchableOpacity>

            <View style={styles.servesDataTouchable}>
              <Text style={styles.quantityText}> {count} </Text>
            </View>
            <TouchableOpacity
              style={styles.minusTouchable}
              onPress={() => setCount(count + 1)}>
              <Text style={styles.quantityText}> + </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.addTouchable}
        activeOpacity={0.9}
        onPress={() => {
          isLoggedIn ? handleCart('cart') : showAlert();
        }}
        >
        <Cart name="shopping-cart" size={30} color={Colors.white} />

      </TouchableOpacity>

      <View style={styles.botomView}>
        <TouchableOpacity
          style={styles.addCartTouchable}
          activeOpacity={0.8}
          onPress={() => {
            isLoggedIn ? handleCart('buy') : showAlert();
          }}>
          <Text style={styles.addCartTouchableText}> Buy Now </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rateTouchable}
          activeOpacity={0.8}
          onPress={() => {
            isLoggedIn ? setModalVisible(true) : showAlert()
            }}>
          <Text style={styles.rateTouchableText}>Rate Product</Text>
        </TouchableOpacity>
      </View>

      {modalVisible ? (
        <RateModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          name={name}
          mainImage={mainImage}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: Colors.white,
  },
  shareTouchable: {
    position: 'absolute',
    top: 0,
    right: 15,
  },
  slideBoxPagination: {
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
  detailsContainerView: {},
  detailsSubContainerView: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgray,
    marginBottom: 10,
  },
  productNameText: {
    fontSize: normalize(20),
    marginBottom: normalize(15),
  },
  categoryView: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  productMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
    paddingRight: 10,
  },
  productView: {
    flexDirection: 'row',
  },
  priceText: {
    fontSize: normalize(18),
    color: 'green',
  },
  ratingText: {
    marginRight: 10,
  },
  highlightContaineriew: {
    padding: 10,
  },
  hightlightText: {
    fontSize: normalize(15),
    fontWeight: 'bold',
    marginBottom: 25,
  },
  productDescMainView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  productDescView: {
    width: '45%',
  },
  productDescText: {
    fontSize: normalize(15),
    fontWeight: 'bold',
  },
  productDescTextView: {
    width: '55%',
    paddingLeft: 10,
  },
  textStyle: {
    fontSize: normalize(16),
  },
  botomView: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addCartTouchable: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: Colors.lightgray,
  },
  addCartTouchableText: {
    fontSize: normalize(18),
  },
  rateTouchable: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: Colors.red,
  },
  rateTouchableText: {
    fontSize: normalize(18),
    color: 'white',
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
  servesView: {
    flexDirection: 'row',
    marginTop: normalize(20),
    margin: 15,
    alignItems: 'center',
  },
  servesDataView: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    width: '35%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  swiperImage: {
    height: '70%',
    width: '100%',
  },
  addTouchable: {
    height: normalize(60),
    width: normalize(60),
    borderRadius: 50,
    position: 'absolute',
    right: normalize(10),
    bottom: normalize(65),
    backgroundColor: Colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
