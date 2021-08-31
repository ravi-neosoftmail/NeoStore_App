import React, {useEffect, useState} from 'react';
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
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

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

  const [googleData, setGoogeData] = useState({
    userData: '',
    successLogin: false,
  });
  const [facebookData, setFacebookData] = useState('');

  const handleLogin = () => {
    let errorOccur = errorValidator(loginData);

    let payload = {
      email: loginData.email,
      password: loginData.password,
    };

    if (
      Object.keys(errorOccur).length === 0 &&
      errorOccur.constructor === Object
    ) {
      dispatch(loginRequest({payload, navigation, getError}));
      setLoginData({...loginData, error: errorOccur});
    } else {
      setLoginData({...loginData, error: errorOccur});
    }
  };

  const getError = message => {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: message,
      visibilityTime: 1000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  const toastMessage = message => {
    Toast.show({
      type: 'info',
      position: 'bottom',
      text1: message,
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  };

  const signIn = async () => {
    GoogleSignin.configure({
      webClientId:
        '299525907876-cnknet097maefjguv3qfiu5jvs2129ka.apps.googleusercontent.com',
      android:
        '299525907876-89gsuru0bnr8bapqpb167c49ij0e719q.apps.googleusercontent.com',
      offlineAccess: true,
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setGoogeData({userData: userInfo, successLogin: true});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        toastMessage('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        toastMessage('sign in is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        toastMessage('play services not available or outdated');
      }
    }
  };

  const handleFacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          toastMessage('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            getInfoFromToken(accessToken);
          });
        }
      },
      function (error) {
        console.error(error);
      },
    );
  };

  const getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name,  first_name, last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
        } else {
          setFacebookData(result);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
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

          <View style={styles.horizontalView}>
            <View style={styles.horizontalLineView} />
            <View>
              <Text style={{width: normalize(30), textAlign: 'center'}}>
                Or
              </Text>
            </View>
            <View style={styles.horizontalLineView} />
          </View>

          <GenericButton
            title="Login with Facebook"
            iconName="facebook"
            onPress={handleFacebookLogin}
          />
          <GenericButton
            title="Login with Google"
            iconName="google"
            onPress={signIn}
          />

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
    marginBottom: normalize(30),
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
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  horizontalLineView: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
});
