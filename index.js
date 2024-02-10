/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import {Provider} from 'react-redux';
import {store} from './src/store';
import messaging from '@react-native-firebase/messaging';
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const appRoot = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => appRoot);
