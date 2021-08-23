import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import normalize from 'react-native-normalize';
import {Colors} from '../../../assets/Colors';
import GenericTextInput from '../../../component/GenericTextInput';
import {Avatar} from 'react-native-paper';
import GenericButton from '../../../component/GenericButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-datepicker';
import {useDispatch, useSelector} from 'react-redux';
import * as ImagePicker from 'react-native-image-picker';
import {changeUserImage} from '../../../redux/action/action';

/**
 *
 * @param {*} param0
 * @description This is a Edit Profile screen which requires user name, email, phone number and DOB.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function EditProfile() {
  const dispatch = useDispatch();

  const [date, setDate] = useState('');
  const userData = useSelector(state => state.userData.user);

  const userImage = useSelector(state => state.userImage.userImage);

  const [editProfile, setEditProfile] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData?.mobile?.toString(),
  });

  const imageHandle = () => {
    const options = {};

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        dispatch(changeUserImage(response.assets[0].uri));
      }
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : null}
      enabled
      keyboardVerticalOffset={60}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.headerText}> NeoStore </Text>

        <View style={styles.avatarView}>
          <Avatar.Image
            source={{
              uri: userImage.length? userImage : 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-21.jpg',
            }}
            size={100}
            backgroundColor="white"
          />

          <TouchableOpacity
            style={styles.editTouchableIcon}
            activeOpacity={0.8}
            onPress={() => imageHandle()}>
            <Icon name="edit" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>

        <GenericTextInput
          placeHolder="First Name"
          iconName="user"
          value={editProfile.firstName}
        />
        <GenericTextInput
          placeHolder="Last Name"
          iconName="user"
          value={editProfile.lastName}
        />
        <GenericTextInput
          placeHolder="Email"
          iconName="envelope"
          value={editProfile.email}
        />
        <GenericTextInput
          placeHolder="Phone number"
          iconName="mobile-phone"
          keyboardType="numeric"
          maxLength={10}
          value={editProfile.phone}
        />

        <View style={styles.dateView}>
          <Text style={styles.dateText}> Date of Birth </Text>
          <DatePicker
            style={styles.datePicker}
            date={date}
            mode="date"
            placeholder="December 12th 1997"
            format="MMMM Do YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={date => {
              setDate(date);
            }}
          />
        </View>
        <GenericButton title="Submit" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  headerText: {
    alignSelf: 'center',
    fontSize: normalize(35),
    fontWeight: 'bold',
    marginBottom: normalize(35),
    marginTop: normalize(15),
  },
  avatarView: {
    alignItems: 'center',
    marginBottom: normalize(20),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  editTouchableIcon: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    position: 'relative',
    left: -30,
    bottom: 5,
    backgroundColor: Colors.purple,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateView: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  dateText: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    marginRight: 10,
  },
  datePicker: {
    minWidth: 200,
  },
});
