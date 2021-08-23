import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../../assets/Colors';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountScreenTile from './AccountScreenTile';
import normalize from 'react-native-normalize';
import {useSelector} from 'react-redux';

/**
 *
 * @param {*} param0 navigation which is used to navigate between screens.
 * @description This is My Account screen which shows the User Information details.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function MyAccount({navigation}) {
  const userData = useSelector(state => state.userData.user);
  const userImage = useSelector(state => state.userImage.userImage);

  console.log(userImage, 'userImage', userImage.length);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainerView}>
        <View style={styles.profileView}>
          <Avatar.Image
            source={{
              uri: userImage.length? userImage : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-21.jpg',
            }}
            size={100}
            backgroundColor="white"
          />
          <Text style={styles.nameText}>
            {userData.firstName} {userData.lastName}{' '}
          </Text>
        </View>
        <View style={styles.detailsView}>
          <Icon name="envelope" size={15} color={'white'} />
          <Text style={styles.detailsText}> {userData.email} </Text>
        </View>
        <View style={styles.detailsView}>
          <Icon name="mobile-phone" size={30} color={'white'} />
          <Text style={styles.detailsText}> {userData.mobile} </Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.tileView}>
          <AccountScreenTile
            title="Order History"
            iconName="backpack"
            arrowIconName="arrow-forward"
            onPress={() => navigation.navigate('Order History')}
          />
          <AccountScreenTile
            title="My Cart"
            iconName="shopping-cart"
            arrowIconName="arrow-forward"
            onPress={() => navigation.navigate('My Cart')}
          />
          <AccountScreenTile
            title="Shipping Address"
            iconName="local-shipping"
            arrowIconName="arrow-forward"
            onPress={() => navigation.navigate('Shipping Address')}
          />
          <AccountScreenTile
            title="Edit Profile"
            iconName="edit"
            arrowIconName="arrow-forward"
            onPress={() => navigation.navigate('Edit Profile')}
          />
          <AccountScreenTile
            title="Reset Password"
            iconName="lock"
            arrowIconName="arrow-forward"
            onPress={() => navigation.navigate('Change Password')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainerView: {
    backgroundColor: Colors.purple,
    height: 250,
    padding: 20,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  nameText: {
    marginLeft: 30,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  tileView: {
    flex: 1,
    padding: normalize(15),
    paddingTop: normalize(30),
  },
});
