import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ImageCards = ({imageSource}) => {
  return (
    <View style={styles.container}>
      <View style={{margin: 10}}>
        <Image style={styles.mainImages} source={imageSource} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: 28}}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 18,
              color: 'gray',
              marginBottom: 6,
            }}>
            coins required
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../assets/image/internet.png')}
              style={{height: 20, width: 20}}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                fontSize: 16,
                marginLeft: 5,
              }}>
              1000 coins for each ticket
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.claim}>
          <Text style={{fontSize: 16, color: 'white', fontSize: 18}}>
            claim
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderWidth: 2,
    height: 410,
    width: 330,
    marginRight: 20,
  },
  mainImages: {
    width: 280,
    height: 250,
    marginTop: 20,
    marginLeft: 20,
  },
  claim: {
    height: 50,
    width: 70,
    marginLeft: 12,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
