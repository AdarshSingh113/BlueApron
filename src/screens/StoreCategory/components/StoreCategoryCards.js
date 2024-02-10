import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const StoreCategoryCards = ({data, categoriesDetails}) => {
  const firstImage = data?.images[0]?.image;
  const secondImage = data?.images[1]?.image;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => categoriesDetails(data)}>
      <View style={styles.insideContainer}>
        <View>
          <Image style={{height: 33, width: 33}} source={firstImage} />
          <Image
            style={{
              height: 33,
              width: 33,
              position: 'absolute',
              marginLeft: 16,
            }}
            source={secondImage}
          />
          <ImageBackground
            style={{
              height: 33,
              width: 33,
              position: 'absolute',
              marginLeft: 32,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={require('../../../assets/image/blackCategory.png')}>
            <Text style={{color: 'white', fontSize: 10, fontWeight: '600'}}>
              +{data?.images.length - 2}
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            width: 69,
            height: 33,
            borderRadius: 1,
            borderColor: 'gray',
            marginTop: 16,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              fontWeight: '500',
            }}>
            {data?.category}
          </Text>
          <Text style={{color: 'gray', fontSize: 10, fontWeight: '400'}}>
            +{data?.images.length - 2} platforms
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(StoreCategoryCards);

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    height: 118,
    width: 98,
    borderColor: 'white',
    marginTop: 13,
    flexDirection: 'row',
    marginLeft: 16,
  },
  insideContainer: {
    marginTop: 18,
    width: 69,
    height: 82,
    marginRight: 14,
    marginLeft: 15,
    marginBottom: 18,
  },
});
