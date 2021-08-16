import React, {useState} from 'react';
import {
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
import {Colors} from '../../../assets/Colors';
import {
  emailValidator,
  errorValidator,
  passwordValidator,
} from '../../../component/Validator';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../../../redux/action/action';

/**
 *
 * @param {*} param0 navigation which is used to navigate between screens.
 * @description This is a login screen which requires user identification and authentication, regularly performed by entering a username and password combination.
 * @author Ravi Ranjan
 * @returns JSX element that describes how a section of the UI (User Interface) should appear.
 */

export default function Login({navigation}) {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    error: {},
  });


  const handleLogin = () => {
    // let errorOccur = errorValidator(loginData);

    let payload = {
      email: loginData.email,
      password: loginData.password,
    };

    dispatch(loginRequest({payload, navigation, getError}));

    //   if (
    //     Object.keys(errorOccur).length === 0 &&
    //     errorOccur.constructor === Object
    //   ) {
    //     dispatch(loginRequest({payload, navigation, getError}))
    //     setLoginData({ ...loginData, error: errorOccur });
    //   } else {
    //     setLoginData({ ...loginData, error: errorOccur });
    //   }
  };

  const getError = message => {
    alert(message);
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
            placeHolder="email"
            iconName="envelope"
            value={loginData.email}
            // onChangeText={(val) => setLoginData({ ...loginData, email: val })}
            onChangeText={val => {
              emailValidator(val, loginData);
              setLoginData({...loginData, email: val});
            }}
            error={loginData.error.email}
          />

          <GenericTextInput
            placeHolder="password"
            iconName="lock"
            type="password"
            value={loginData.password}
            // onChangeText={(val) =>
            //   setLoginData({ ...loginData, password: val })
            // }
            onChangeText={val => {
              passwordValidator(val, loginData);
              setLoginData({...loginData, password: val});
            }}
            secure={visible ? false : true}
            setVisible={setVisible}
            visible={visible}
            error={loginData.error.password}
          />

          <GenericButton title="LOGIN" onPress={handleLogin} />

          <TouchableOpacity
            style={styles.forgetPasswordTouchable}
            onPress={() => navigation.navigate('Forget Password')}>
            <Text style={[styles.genericeTextStyle, {color: Colors.skyblue}]}>
              {' '}
              Forget password?{' '}
            </Text>
          </TouchableOpacity>

          <View style={styles.bottomView}>
            <Text style={styles.genericeTextStyle}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}>
              <Text style={[styles.genericeTextStyle, {color: Colors.skyblue}]}>
                {' '}
                Register{' '}
              </Text>
            </TouchableOpacity>
          </View>
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
  },
  forgetPasswordTouchable: {
    alignItems: 'center',
    marginTop: 15,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  genericeTextStyle: {
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
});
