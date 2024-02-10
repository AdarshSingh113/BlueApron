import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Card = ({item, onPressDetails}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        {item.urlToImage != null && (
          <Image
            style={styles.image}
            source={{
              uri: item.urlToImage,
            }}
          />
        )}
        <Text style={styles.text}>{item.author?.split?.(' ')[0]}</Text>
      </View>
      <View style={{flex: 1, marginLeft: 15}}>
        <Text style={styles.date}>{item.publishedAt}</Text>
        <Text>{item?.content}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressDetails(item)}>
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    borderRadius: 15,
    marginHorizontal: 15,
    padding: 15,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  date: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'black',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
});
