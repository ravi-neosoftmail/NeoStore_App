import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import normalize from 'react-native-normalize';
import {Colors} from '../../../assets/Colors';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {Avatar} from 'react-native-paper';
import { logoutRequest } from '../../../redux/action/action';
import Toast from 'react-native-toast-message';

/**
 *
 * @param {*} param0 props in which navigation is used to navigate between different screens.
 * @description This is CustomDrawerContent component which is used to make the UI of drawer content.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a UI (User Interface) of the Drawer Content should appear.
 */

export default function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
  const user = useSelector(state => state.userData.user);
  const userImage = useSelector(state => state.userImage.userImage);


  const showAlert = () => {
    Alert.alert('Are you sure you want to logout?', '', [
      {
        text: 'Cancel',
      },
      {
        text: 'Logout',
        onPress: () => {
          Toast.show({
            position: 'bottom',
            text1: 'Logout success',
            visibilityTime: 3000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
          dispatch(logoutRequest())
          props.navigation.navigate('Dashboard');
        },
      },
    ]);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        {isLoggedIn ? (
          <View style={styles.loggedInProfileView}>
            <Avatar.Image
              source={{
                uri: userImage,
              }}
              size={60}
              style={{backgroundColor:Colors.white}}
            />
            <Text style={styles.profileText}>
              {' '}
              {user.firstName} {user.lastName}
            </Text>
          </View>
        ) : (
          <View style={styles.profileView}>
            <Text style={styles.profileText}> NeoStore </Text>
          </View>
        )}
        <DrawerItem
          icon={({size}) => <Icons color="#1E90FF" name="home" size={size} />}
          label="Home"
          onPress={() => {
            props.navigation.navigate('Dashboard');
          }}
        />
        {isLoggedIn ? null : (
          <DrawerItem
            icon={({size}) => (
              <Icons color="#1E90FF" name="account-circle" size={size} />
            )}
            label="Login"
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          />
        )}
        {isLoggedIn ? (
          <DrawerItem
            icon={({size}) => (
              <Icons color="#1E90FF" name="account-circle" size={size} />
            )}
            label="My Account"
            onPress={() => {
              props.navigation.navigate('My Account');
            }}
          />
        ) : null}

        {isLoggedIn ? (
          <DrawerItem
            icon={({size}) => <Icon color="#1E90FF" name="box" size={size} />}
            label="My Orders"
            onPress={() => {
              props.navigation.navigate('Order History');
            }}
          />
        ) : null}

        <DrawerItem
          icon={({size}) => (
            <FontAwesome5 color="#1E90FF" name="chair" size={size} />
          )}
          label="All Products"
          onPress={() => {
            props.navigation.navigate('All Products');
          }}
        />

        {isLoggedIn ? (
          <DrawerItem
            icon={({size}) => (
              <FontAwesome5 color="#1E90FF" name="shopping-cart" size={size} />
            )}
            label="My Cart"
            onPress={() => {
              props.navigation.navigate('My Cart');
            }}
          />
        ) : null}
        <DrawerItem
          icon={({size}) => (
            <Icons color="#1E90FF" name="location-on" size={size} />
          )}
          label="Store Locator"
          onPress={() => {
            props.navigation.navigate('Store Locator');
          }}
        />
      </DrawerContentScrollView>
      {isLoggedIn ? (
      <DrawerItem
        icon={({size}) => <Icons color="#1E90FF" name="logout" size={size} />}
        label="Logout"
        onPress={() => showAlert()}
      />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  loggedInProfileView: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    paddingLeft: 20,
  },
  profileView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  profileText: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(40),
    backgroundColor: Colors.skyblue,
    margin: 10,
  },
  dashboardTouchable: {
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 3,
    backgroundColor: 'skyblue',
    marginBottom: 4,
  },
});
