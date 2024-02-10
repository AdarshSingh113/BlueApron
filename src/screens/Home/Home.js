import React, {useEffect, useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getPaginatedData} from '../../store/newsSlice';
import Card from './components/Card';
import {Colors} from '../../styles/Colors';
import CommonHeader from '../../components/CommonHeader';

const Home = ({navigation}) => {
  const newsData = useSelector(state => state.newsSlice.newsData);
  const loadMore = useSelector(state => state.newsSlice.loadMore);
  const loading = useSelector(state => state.newsSlice.loading);
  const [pageNum, setpageNum] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getNewsDetails());

    return () => {};
  }, []);

  console.log('-----------------', loadMore);

  const onPressMove = () => {
    navigation.navigate('Store');
  };
  const onsearchBar = item => {
    navigation.navigate('Search', item);
  };
  const onPressDetails = item => {
    navigation.navigate('Detail', item);
  };

  const renderItem = ({item, index}) => {
    return <Card onPressDetails={onPressDetails} item={item} />;
  };
  console.log('>>>>>>>>>>>>>>.', pageNum);
  const onEndReached = () => {
    setpageNum(pre => {
      dispatch(getPaginatedData(pre + 1));
      return pre + 1;
    });
  };

  const ListFooterComponent = () => {
    if (loadMore)
      return (
        <View>
          <ActivityIndicator size={'small'} color={'red'} />
        </View>
      );
  };

  const ItemSeparatorComponent = () => {
    return <View style={styles.seprator} />;
  };

  return (
    <>
      <CommonHeader navigation={navigation} arrow={false} title={'Home'} />
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={onsearchBar}>
          <View style={styles.search}>
            <Text>Search...</Text>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../assets/image/search.png')}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        {loading ? (
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <ActivityIndicator size={'large'} color={'red'} />
          </View>
        ) : (
          <FlatList
            style={styles.list}
            ListFooterComponent={ListFooterComponent}
            onEndReached={onEndReached}
            ItemSeparatorComponent={ItemSeparatorComponent}
            data={newsData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index + 'i'}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPressMove}>
          <Text style={styles.buttonText}>Yolo</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 30,
    margin: 10,
    width: 300,
    alignSelf: 'center',
  },
  buttonContainer: {
    backgroundColor: '#ffffff10',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  seprator: {
    paddingVertical: 10,
  },
  list: {
    marginTop: 15,
  },
  search: {
    borderWidth: 1,
    borderRadius: 20,
    height: 60,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.White,
    borderColor: Colors.Gray,
  },
});

export default Home;
