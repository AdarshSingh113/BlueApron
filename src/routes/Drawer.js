import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import ViewDetails from '../screens/ViewDetails/ViewDetails';
import VideoPlayer from '../screens/VideoPlayer/VideoPlayer';
import Detail from '../screens/Details/Detail';
import Store from '../screens/Store/Store';
import Search from '../screens/Search/Search';
import StoreCategory from '../screens/StoreCategory/StoreCategory';
import SubscriptionList from '../screens/SubscriptionList/SubscriptionList';
import Faq from '../screens/Faq/Faq';
import Modale from '../components/Modal';
import FirstPage from '../screens/HelloFresh/FirstPage';
import Plans from '../screens/HelloFresh/CountryModal';
import CountryModal from '../screens/HelloFresh/CountryModal';

const DrawerRoute = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // Hide default headers
      }}>
      <Drawer.Screen name="FirstPage" component={FirstPage} />
      <Drawer.Screen name="CountryModal" component={CountryModal} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Modal" component={Modale} />
      <Drawer.Screen name="ViewDetails" component={ViewDetails} />
      <Drawer.Screen name="VideoPlayer" component={VideoPlayer} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Store" component={Store} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="StoreCategory" component={StoreCategory} />
      <Drawer.Screen name="SubscriptionList" component={SubscriptionList} />
      <Drawer.Screen name="Faq" component={Faq} />
    </Drawer.Navigator>
  );
};

export default DrawerRoute;
