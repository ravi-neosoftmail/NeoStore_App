import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login/Login';
import Registration from '../../screens/Registration/Registration';
import SetPassword from '../../screens/SetPassword/SetPassword';
import ForgetPassword from '../../screens/ForgetPassword/ForgetPassword';
import {Colors} from '../../../assets/Colors';
import normalize from 'react-native-normalize';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Icons from 'react-native-vector-icons/Feather';
import {TouchableOpacity, View, Text, StyleSheet, Alert} from 'react-native';
import AllProducts from '../../screens/ProductList/AllProducts';
import StoreLocator from '../../screens/StoreLocator/StoreLocator';
import MyAccount from '../../screens/MyAccount/MyAccount';
import EditProfile from '../../screens/EditProfile/EditProfile';
import MyCart from '../../screens/MyCart/MyCart';
import ShippingAddress from '../../screens/ShippingAddress/ShippingAddress';
import OrderHistory from '../../screens/OrderHistory/OrderHistory';
import AddAddress from '../../screens/ShippingAddress/AddAddress';
import EditAddress from '../../screens/ShippingAddress/EditAddress';
import ProductDetails from '../../screens/ProductList/ProductDetails';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OrderDetails from '../../screens/OrderHistory/OrderDetails';
import PlaceOrder from '../../screens/MyCart/PlaceOrder';
import Search from '../../screens/SearchBox/Search';
import {useSelector} from 'react-redux';
import ZoomImage from '../../screens/ProductList/ZoomImage';


/**
 *
 * @param {*} param0 
 * @description This is Stack Navigation screen which is used to create Stack Navigator of the App.
 * @author Ravi Ranjan
 * @returns the navigation to navigate between screens.
 */



const Stack = createNativeStackNavigator();

const DrawerHeader = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={styles.headerMenuTouchable}>
      <Icons name="menu" size={26} color={Colors.white} />
    </TouchableOpacity>
  );
};

const CartDetails = ({navigation, count, isLoggedIn}) => {
  return (
    <TouchableOpacity
      onPress={() => {isLoggedIn ?
        navigation.navigate('My Cart')
        : 
        Alert.alert('You need to Login First', '', [
          {
            text: 'Cancel',
          },
          {
            text: 'Login',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ]);
      }}
      style={styles.headerCartTouchable}>
      <Icon name="shopping-cart" size={25} color={Colors.white} />
      {isLoggedIn ?
      <View style={styles.cartTextView}>
        <Text style={styles.cartText}>{count}</Text>
      </View>
      :null}
    </TouchableOpacity>
  );
};

export default function StackNavigation({navigation}) {
  const cart = useSelector(state => state.cartProduct.cartProduct);
  const [count, setCount] = useState(0);
  const isLoggedIn = useSelector(state => state.userData.isLoggedIn);

  useEffect(() => {
    setCount(cart?.products?.length);
  }, [cart]);

  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.purple,
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: normalize(20),
          fontWeight: 'bold',
          textAlign: 'center',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Change Password" component={SetPassword} />
      <Stack.Screen name="Forget Password" component={ForgetPassword} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: 'Dashboard',
          headerShown: true,
          headerLeft: () => <DrawerHeader navigation={navigation} />,
          headerRight: () => (
            <CartDetails navigation={navigation} count={count} isLoggedIn={isLoggedIn}/>
          ),
        }}
      />
      <Stack.Screen name="All Products" component={AllProducts} 
        //  options={{
        //   // headerTitle: 'Dashboard',
        //   headerShown: true,
        //   headerLeft: () => <DrawerHeader navigation={navigation} />,
        // }}
      />
      <Stack.Screen name="Store Locator" component={StoreLocator} />
      <Stack.Screen name="My Account" component={MyAccount} 
           options={{
            // headerTitle: 'Dashboard',
            headerShown: true,
            headerLeft: () => <DrawerHeader navigation={navigation} />,
          }}
      />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="My Cart" component={MyCart} />
      <Stack.Screen name="Shipping Address" component={ShippingAddress} 
   
      />
      <Stack.Screen name="Order History" component={OrderHistory} />
      <Stack.Screen name="Add Address" component={AddAddress} />
      <Stack.Screen name="Edit Address" component={EditAddress} />
      <Stack.Screen name="Product Details" component={ProductDetails} 
      options={{
        // headerTitle: 'Dashboard',
        headerRight: () => (
          <CartDetails navigation={navigation} count={count} isLoggedIn={isLoggedIn}/>
        ),
            headerShown: true,
      }}
      />
      <Stack.Screen name="Order Details" component={OrderDetails} />
      <Stack.Screen name="Place Order" component={PlaceOrder} />
      <Stack.Screen name="Search Product" component={Search} />
      <Stack.Screen
        name="Zoom Image"
        component={ZoomImage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerMenuTouchable: {
    marginRight: normalize(50),
  },
  headerCartTouchable: {
    marginLeft: normalize(50),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cartTextView: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
    left: -10,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  cartText: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
  },
});
