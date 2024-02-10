import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CommonHeader from '../../components/CommonHeader';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import ImageCards from './components/ImageCards';
import Svg, {Path} from 'react-native-svg';

const Store = ({navigation}) => {
  const imageData = [
    {image: require('../../assets/image/a.png')},
    {image: require('../../assets/image/b.png')},
    {image: require('../../assets/image/c.png')},
  ];
  const iconData = [
    {image: require('../../assets/image/home.png'), text: 'home'},
    {image: require('../../assets/image/Qr.png'), text: 'yolopay'},
    {image: require('../../assets/image/ginie.png'), text: 'ginie'},
  ];
  const onCategoriesMove = () => {
    navigation.navigate('StoreCategory');
  };

  useEffect(() => {
    console.log('--------------');
    return () =>
      console.log('=====================fjkshfjhksdhkjdsh===============');
  }, []);

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <LinearGradient
        colors={['black', '#A90808', 'black']}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        locations={[0.1, 0.5, 0.9]}
        style={{flex: 1}}>
        <CommonHeader navigation={navigation} arrow={true} title={'Store'} />
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 30, width: 100}}
              source={require('../../assets/image/yolo.png')}
            />
            <View style={styles.yuluTextContainer}>
              <Text style={styles.yuluText}>GINIE</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 16, color: 'gray'}}>SUBSCRIPTIONS</Text>
              <TouchableOpacity onPress={onCategoriesMove}>
                <Text
                  style={{
                    color: 'red',
                    width: 70,
                    height: 25,
                    textDecorationLine: 'underline',
                  }}>
                  view all
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                width: 229,
                height: 54,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Experience the thrill of winning
            </Text>
          </View>
          <FlatList
            style={{
              marginTop: 10,
              borderColor: 'black',
            }}
            data={imageData}
            horizontal
            renderItem={({item}) => <ImageCards imageSource={item.image} />}
            keyExtractor={(item, index) => index + 'i'}
          />
          <View
            style={{
              backgroundColor: 'transparent',
              height: 120,
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {iconData.map((item, index) => (
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    borderColor: 'gray',
                    height: index == 1 ? 51 : 41,
                    width: index == 1 ? 51 : 41,
                    borderRadius: 35,
                    borderWidth: 1,
                    borderColor: 'gray',
                    marginHorizontal: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    key={index}
                    source={item.image}
                    style={{width: 22, height: 22}}
                    resizeMode="contain"
                  />
                </View>
                <View>
                  <Text
                    key={index + 'i'}
                    style={{color: 'white', fontSize: 16, marginTop: 5}}>
                    {item.text}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  yuluText: {
    fontWeight: '700',
    fontSize: 15,
    color: 'white',
    marginLeft: 12,
    marginTop: 3,
  },
  yuluTextContainer: {
    borderRadius: 10,
    borderColor: 'red',
    backgroundColor: 'red',
    marginLeft: 10,
    width: 67,
    height: 30,
  },
});
