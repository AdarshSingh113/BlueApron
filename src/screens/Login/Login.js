import {
  Button,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import TextInputComponent from './components/TextInputComponent';
import CommonHeader from '../../components/CommonHeader';

const Login = ({navigation, route}) => {
  //const {name} = route?.params;

  const [intialValueName, setInitialValueName] = useState('');
  const [intialValuePassword, setInitialValuePassword] = useState('');
  const [buttonStyle, setbuttonStyle] = useState(false);

  const onChangeUserName = val => {
    console.log(val);
    setInitialValueName(val);
  };

  const onChangePassword = val => {
    setInitialValuePassword(val);
  };

  return (
    <React.Fragment>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <CommonHeader navigation={navigation} arrow={false} title={'Login'} />
      <View style={styles.container}>
        <Text style={styles.headerText}>Login To Get Started</Text>
        <View style={styles.input}>
          <TextInputComponent
            onChange={onChangeUserName}
            intialValue={intialValueName}
            placeholder={'User Name'}
          />
          <TextInputComponent
            onChange={onChangePassword}
            intialValue={intialValuePassword}
            placeholder={'Password'}
          />
        </View>
        <Pressable
          style={[
            styles.button,
            // {
            //   borderWidth: buttonStyle ? 0 : 2,
            //   borderColor: buttonStyle ? 'red' : 'black',
            //   elevation: buttonStyle ? 0 : 10,
            // },
          ]}
          onPressIn={() => {
            setbuttonStyle(true);
          }}
          onPressOut={() => {
            setbuttonStyle(false);
          }}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    </React.Fragment>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    marginLeft: 80,
    fontSize: 20,
    fontWeight: 'bold',
    elevation: 2,
  },
  input: {
    margin: 2,
  },
  button: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
});
