import {Alert, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './routes/StackRoutes';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  const navigationRef = useRef();
  const requestUserPermission = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
  };
  const intializeFirebase = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestUserPermission();
    requestLocationPermission();
    intializeFirebase();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
    // Request permission for receiving notifications (optional)

    // Get the FCM token
    // messaging()
    //   .getToken()
    //   .then(token => {
    //     console.log('FCM Token:', token);
    //   });

    // Handle token refresh (optional)
  }, []);
  console.log();
  console.log(navigationRef.current);
  return (
    <NavigationContainer
      onStateChange={() => console.log("''''''''''''''''''''''''''")}
      onReady={() => {
        console.log('....................');
      }}
      ref={navigationRef}>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
