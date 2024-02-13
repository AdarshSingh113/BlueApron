import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';

const CommonHeader = ({
  navigation,
  title,
  arrow = true,
  subscription = false,
}) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer(); // Toggle the drawer visibility
  };
  return (
    <React.Fragment>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.container}>
        {arrow && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.image}
              source={require('../assets/image/backArrow.png')}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={toggleDrawer}>
          <Image
            style={styles.image}
            source={require('../assets/image/bars.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            marginLeft: 20,
            color: 'white',
          }}>
          {title}
        </Text>
        {subscription && (
          <TouchableOpacity
            style={{
              borderRadius: 80,
              borderWidth: 1,
              borderColor: 'gray',
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 170,
            }}>
            <Text style={{fontSize: 14, fontWeight: '500', color: 'gray'}}>
              my subscriptions
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'black',
    height: 60,
    backgroundColor: 'black',
    paddingTop: 15,
  },
  image: {
    height: 25,
    width: 25,
    marginLeft: 10,
    tintColor: 'white',
  },
});

export default CommonHeader;
