import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GenericTextInput from '../../../component/GenericTextInput';
import GenericButton from '../../../component/GenericButton';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../assets/Colors';
import {confirmPasswordValidator, errorValidator, firstNameValidator, lastNameValidator, mobileValidator, passwordValidator, emailValidator} from '../../../component/Validator';
import RegistrationModal from './RegistartionModal';
import {useDispatch} from 'react-redux';
import {registrationRequest} from '../../../redux/action/action';


/**
 * 
 * @param {*} param0 navigation which is used to navigate between screens.
 * @description This is a Registration screen which requires user identification and authentication, regularly performed by entering user details combination.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function Registration({navigation}) {
  const dispatch = useDispatch();
  const [gender, setGender] = useState();
  const [conditions, setConditions] = useState(false);
  const [visible, setVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
    mobile: '',
    gender: '',
    conditions: '',
    error: {},
  });

  const handleRegister = () => {
    let errorOccur = errorValidator(registrationData);

    let payload = {
      firstName: registrationData.firstName,
      lastName: registrationData.lastName,
      email: registrationData.email,
      password: registrationData.password,
      confirm_password: registrationData.confirm_password,
      mobile: registrationData.mobile,
      gender: registrationData.gender,
    };

    if (
      Object.keys(errorOccur).length === 0 &&
      errorOccur.constructor === Object
    ) {
      dispatch(registrationRequest({payload, navigation}));
      setRegistrationData({...registrationData, error: errorOccur});
    } else {
      setRegistrationData({...registrationData, error: errorOccur});
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : null}
      enabled
      keyboardVerticalOffset={60}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <View>
          <Text style={styles.headingText}> NeoStore </Text>
          <GenericTextInput
            placeHolder="First Name"
            iconName="user"
            value={registrationData.firstName}
            // onChangeText={val =>
            //   setRegistrationData({...registrationData, firstName: val})
            // }
            onChangeText={val => {
              firstNameValidator(val, registrationData);
              setRegistrationData({...registrationData, firstName: val});
            }}
            error={registrationData.error.firstName}
          />

          <GenericTextInput
            placeHolder="Last Name"
            iconName="user"
            value={registrationData.lastName}
            // onChangeText={val =>
            //   setRegistrationData({...registrationData, lastName: val})
            // }
            onChangeText={val => {
              lastNameValidator(val, registrationData);
              setRegistrationData({...registrationData, lastName: val});
            }}
            error={registrationData.error.lastName}
          />

          <GenericTextInput
            placeHolder="Email"
            iconName="envelope"
            value={registrationData.email}
            // onChangeText={val =>
            //   setRegistrationData({...registrationData, email: val})
            // }
            onChangeText={val => {
              emailValidator(val, registrationData);
              setRegistrationData({...registrationData, email: val});
            }}
            error={registrationData.error.email}
          />

          <GenericTextInput
            placeHolder="password"
            iconName="lock"
            type="password"
            value={registrationData.password}
            // onChangeText={val =>
            //   setRegistrationData({...registrationData, password: val})
            // }
            onChangeText={val => {
              passwordValidator(val, registrationData);
              setRegistrationData({...registrationData, password: val});
            }}
            secure={visible ? false : true}
            setVisible={setVisible}
            visible={visible}
            error={registrationData.error.password}
          />

          <GenericTextInput
            placeHolder="confirm password"
            iconName="lock"
            type="password"
            value={registrationData.confirm_password}
            // onChangeText={val =>
            //   setRegistrationData({...registrationData, confirm_password: val})
            // }
            onChangeText={val => {
              confirmPasswordValidator(val, registrationData);
              setRegistrationData({...registrationData, confirm_password: val});
            }}
            secure={passwordVisible ? false : true}
            setVisible={setPasswordVisible}
            visible={passwordVisible}
            error={registrationData.error.confirm_Password}
          />

          <GenericTextInput
            placeHolder="Phone number"
            iconName="mobile-phone"
            keyboardType="numeric"
            maxLength={10}
            value={registrationData.mobile}
            // onChangeText={val =>
            //   setRegistrationData({...registrationData, mobile: val})
            // }
            onChangeText={val => {
              mobileValidator(val, registrationData);
              setRegistrationData({...registrationData, mobile: val});
            }}
            error={registrationData.error.mobile}
          />

          <View style={styles.genderMainView}>
            <View>
              <Text style={[styles.genderText, styles.genderGennericText]}>
                {' '}
                Gender{' '}
              </Text>
              {registrationData.error.gender ? (
                <Text style={{color: Colors.red}}>
                  {' '}
                  {registrationData.error.gender}{' '}
                </Text>
              ) : null}
            </View>
            <View style={styles.genderRadioButtonView}>
              <TouchableOpacity
                onPress={() => {
                  setRegistrationData({...registrationData, gender: 'male'});
                  setGender('male');
                }}>
                <Icon
                  name={
                    gender === 'male'
                      ? 'check-circle-outline'
                      : 'checkbox-blank-circle-outline'
                  }
                  size={25}
                />
              </TouchableOpacity>
              <Text style={styles.genderGennericText}> Male </Text>
            </View>

            <View style={styles.genderRadioButtonView}>
              <TouchableOpacity
                onPress={() => {
                  setRegistrationData({
                    ...registrationData,
                    gender: 'female',
                  });
                  setGender('female');
                }}>
                <Icon
                  name={
                    gender === 'female'
                      ? 'check-circle-outline'
                      : 'checkbox-blank-circle-outline'
                  }
                  size={25}
                />
              </TouchableOpacity>
              <Text style={styles.genderGennericText}> Female </Text>
            </View>
          </View>

          <View>
            <View style={styles.TCView}>
              <TouchableOpacity
                onPress={() => {
                  setRegistrationData({
                    ...registrationData,
                    conditions: !conditions,
                  });
                  setConditions(!conditions);
                }}>
                <Icon
                  name={
                    conditions ? 'check-box-outline' : 'checkbox-blank-outline'
                  }
                  size={30}
                />
              </TouchableOpacity>
              <Text> I agree the </Text>
              <TouchableOpacity
                style={{borderBottomWidth: 1}}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.genderGennericText}>
                  Terms & Conditions{' '}
                </Text>
              </TouchableOpacity>
            </View>
            {registrationData.error.conditions ? (
              <Text style={{color: Colors.red}}>
                {' '}
                {registrationData.error.conditions}{' '}
              </Text>
            ) : null}
          </View>

          {/* {registerData.isLoading ?
            <ActivityIndicator size={30} color={Colors.skyblue} />
            : */}
          <GenericButton title="REGISTER" onPress={handleRegister} />
          {/* } */}

          <View style={styles.bottomView}>
            <Text style={styles.genericeTextStyle}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.genericeTextStyle, {color: Colors.skyblue}]}>
                {' '}
                Login{' '}
              </Text>
            </TouchableOpacity>
          </View>
          {modalVisible ? (
            <RegistrationModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          ) : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  headingText: {
    alignSelf: 'center',
    fontSize: normalize(40),
    marginBottom: 30,
    fontWeight: 'bold',
    // marginTop: 10,
  },
  forgetPasswordTouchable: {
    alignItems: 'center',
    marginTop: 15,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  genericeTextStyle: {
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  genderMainView: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 5,
    paddingBottom: 5,
    alignItems: 'center',
    marginTop: normalize(10),
  },
  genderText: {
    alignSelf: 'flex-start',
    marginTop: 3,
  },
  genderRadioButtonView: {
    flexDirection: 'row',
    marginLeft: normalize(50),
    alignItems: 'center',
  },
  genderGennericText: {
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  TCView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    marginTop: 15,
  },
});
