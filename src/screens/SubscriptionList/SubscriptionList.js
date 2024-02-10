import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../../components/CommonHeader';

const SubscriptionList = ({route, navigation}) => {
  const dataPrams = route?.params ?? {};
  const [listItem, setlistItem] = useState([]);

  useEffect(() => {
    setlistItem(dataPrams);
  }, []);
  const cateData = [
    {
      category: 'Ott',
      images: [
        {image: require('../../assets/image/Ellipse4.png')},
        {image: require('../../assets/image/Ellipse3.png')},
        {image: require('../../assets/image/Ellipse4.png')},
        {image: require('../../assets/image/Ellipse3.png')},
        {image: require('../../assets/image/Ellipse4.png')},
        {image: require('../../assets/image/Ellipse3.png')},
      ],
    },
    {
      category: 'Antivirus',
      images: [
        {image: require('../../assets/image/Ellipse6.png')},
        {image: require('../../assets/image/Ellipse9.png')},
      ],
    },
    {
      category: 'Health',
      images: [
        {image: require('../../assets/image/Ellipse2.png')},
        {image: require('../../assets/image/Ellipse7.png')},
      ],
    },
    {
      category: 'Netlflix',
      images: [
        {image: require('../../assets/image/Ellipse1.png')},
        {image: require('../../assets/image/Ellipse3.png')},
        {image: require('../../assets/image/Ellipse1.png')},
        {image: require('../../assets/image/Ellipse2.png')},
      ],
    },
  ];

  const onPressItem = item => {
    setlistItem(item);
  };

  const movetoDetails = () => {
    navigation.navigate('ViewDetails', dataPrams);
  };
  return (
    <>
      <CommonHeader navigation={navigation} arrow={true} title={''} />
      <View style={{backgroundColor: 'black', flex: 1}}>
        <View>
          <FlatList
            data={cateData}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => onPressItem(item)}
                style={{
                  width: 95,
                  height: 40,
                  borderRadius: 40,
                  borderWidth: 1.5,
                  borderColor:
                    item?.category == listItem?.category ? 'red' : 'gray',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 16,
                  marginTop: 24,
                }}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 16,
                    color:
                      item?.category == listItem?.category ? 'red' : 'white',
                  }}>
                  {item?.category}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index + 'i'}
          />
        </View>
        <View style={{padding: 20, flex: 1}}>
          <View style={styles.search}>
            <Image
              style={{height: 30, width: 30}}
              resizeMode="contain"
              source={require('../../assets/image/yolosearch.png')}
            />
            <Text style={{color: 'gray'}}>
              search by platform ............................
            </Text>
          </View>
          <FlatList
            // style={{marginTop: 26, marginLeft: 16}}
            data={listItem?.images}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: 328,
                  borderWidth: 0.6,
                  borderColor: 'gray',
                  marginBottom: 18,
                }}></View>
            )}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    marginBottom: 32,
                    width: 328,
                    height: 58,
                    flexDirection: 'row',
                  }}>
                  <View>
                    <Image
                      source={item?.image}
                      style={{
                        borderColor: 'gray',
                        height: 58,
                        width: 58,
                      }}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{marginLeft: 16}}>
                    <Text
                      style={{fontSize: 12, fontWeight: '500', color: 'white'}}>
                      Alt Balaji
                    </Text>
                    <Text
                      style={{fontSize: 12, fontWeight: '500', color: 'white'}}>
                      plan starts from ₹ 699
                    </Text>
                    <TouchableOpacity onPress={movetoDetails}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '400',
                          color: 'red',
                          textDecorationLine: 'underline',
                          marginTop: 4,
                        }}>
                        view details
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index + 'i'}
          />
        </View>
      </View>
    </>
  );
};

export default SubscriptionList;

const styles = StyleSheet.create({
  search: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderColor: 'gray',
    borderWidth: 0.8,
    marginBottom: 20,
  },
});
