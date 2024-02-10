import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import StoreCategoryCards from './components/StoreCategoryCards';

const StoreCategory = ({navigation}) => {
  const imageData = [
    {image: require('../../assets/image/Category.png')},
    {image: require('../../assets/image/b.png')},
  ];
  const cateData = [
    {
      category: 'Ott',
      images: [
        {image: require('../../assets/image/Ellipse4.png')},
        {image: require('../../assets/image/Ellipse3.png')},
        {image: require('../../assets/image/Ellipse1.png')},
        {image: require('../../assets/image/Ellipse2.png')},
        {image: require('../../assets/image/Ellipse3.png')},
        {image: require('../../assets/image/Ellipse4.png')},
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
  ];

  const categoriesDetails = data => {
    navigation.navigate('SubscriptionList', data);
  };

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <CommonHeader
        navigation={navigation}
        arrow={true}
        title={''}
        subscription={true}
      />
      <View
        style={{
          width: 328,
          height: 54,
          marginHorizontal: 16,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text
          style={{color: 'gray', fontSize: 12, height: 18, fontWeight: '500'}}>
          BUNDLE PRODCUTS
        </Text>
        <Text
          style={{color: 'white', fontSize: 24, height: 36, fontWeight: '600'}}>
          exclusive bundles
        </Text>
      </View>
      <View
        style={{
          width: 328,
          height: 42,
          marginTop: 12,
          marginLeft: 16,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text
          style={{color: 'gray', fontSize: 14, height: 36, fontWeight: '600'}}>
          We have carefully curated a few subscription packages for you.
        </Text>
      </View>
      <View>
        <FlatList
          style={{
            marginTop: 5,
            borderColor: 'black',
          }}
          data={imageData}
          horizontal
          renderItem={({item, index}) => (
            <View style={{marginTop: 24, width: 300, marginLeft: 16}}>
              <Image
                key={index + 'i'}
                source={item.image}
                style={{
                  width: 300,
                  height: 168,
                  borderRadius: 16,
                }}
              />
            </View>
          )}
          keyExtractor={(item, index) => index + 'i'}
        />
      </View>
      <View
        style={{
          width: 328,
          height: 54,
          marginTop: 30,
          marginHorizontal: 16,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text
          style={{color: 'gray', fontSize: 12, height: 18, fontWeight: '500'}}>
          EXPLORE BY
        </Text>
        <Text
          style={{color: 'white', fontSize: 24, height: 36, fontWeight: '600'}}>
          categories
        </Text>
      </View>
      <View
        style={{
          width: 328,
          height: 42,
          marginTop: 12,
          marginLeft: 16,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text
          style={{color: 'gray', fontSize: 14, height: 36, fontWeight: '600'}}>
          Choose the category for which you want to purchase a subscription
        </Text>
      </View>
      <TouchableOpacity>
        <View style={styles.search}>
          <Image
            style={{height: 30, width: 30}}
            resizeMode="contain"
            source={require('../../assets/image/yolosearch.png')}
          />
          <Text style={{color: 'gray'}}>
            search by subscription, --categories
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        {cateData.map((data, index) => (
          <StoreCategoryCards
            key={index}
            data={data}
            category={data.category}
            images={data.images}
            categoriesDetails={categoriesDetails}
          />
        ))}
      </View>
    </View>
  );
};

export default StoreCategory;

const styles = StyleSheet.create({
  search: {
    height: 60,
    width: 328,
    marginLeft: 16,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderColor: 'gray',
    borderWidth: 0.8,
  },
});
