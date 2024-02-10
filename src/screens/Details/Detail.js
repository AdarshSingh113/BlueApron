import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import React, {useEffect} from 'react';
import CommonHeader from '../../components/CommonHeader';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Detail = ({navigation, route}) => {
  console.log(route);

  const widtht = useSharedValue(100);

  const startAnimation = () => {
    widtht.value = withSpring(200, {
      duration: 2000,
    });
  };

  const onPress = () => {
    startAnimation();
    let timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  };

  // useEffect(() => {
  //   startAnimation();
  // }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    width: widtht.value,
  }));

  const {description, title, author, urlToImage} = route.params;

  return (
    <View>
      <CommonHeader navigation={navigation} arrow={true} title={'Detail'} />
      <Image
        source={{uri: urlToImage}}
        style={{height: height / 3, width: width}}
        resizeMode="contain"
      />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15}}>
        {author}
      </Text>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
      <Animated.View style={[animatedStyle, styles.button]}>
        <TouchableOpacity
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          onPress={onPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    backgroundColor: 'white',
    marginTop: 15,
    padding: 10,
    elevation: 1,
  },
  button: {
    backgroundColor: 'black',
    height: 60,
    borderRadius: 30,
    margin: 10,
    width: 200,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
