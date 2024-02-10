import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Detail from '../screens/Details/Detail';
import Store from '../screens/Store/Store';
import Search from '../screens/Search/Search';
import StoreCategory from '../screens/StoreCategory/StoreCategory';
import SubscriptionList from '../screens/SubscriptionList/SubscriptionList';
import ViewDetails from '../screens/ViewDetails/ViewDetails';
import VideoPlayer from '../screens/VideoPlayer/VideoPlayer';
import Faq from '../screens/Faq/Faq';

const Stack = createStackNavigator();

const StackRoutes = () => {
  console.log(';;;;;;;;;;;;;;;;;;;');
  return (
    <Stack.Navigator
      // initialRouteName="SubscriptionList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ViewDetails" component={ViewDetails} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="StoreCategory" component={StoreCategory} />
      <Stack.Screen name="SubscriptionList" component={SubscriptionList} />
      <Stack.Screen name="Faq" component={Faq} />
    </Stack.Navigator>
  );
};
export default StackRoutes;
