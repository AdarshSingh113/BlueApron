import {FlatList, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Card from '../Home/components/Card';
import {Colors} from '../../styles/Colors';
import CommonHeader from '../../components/CommonHeader';

const Search = ({navigation}) => {
  const newsData = useSelector(state => state.newsSlice.newsData);
  const [searchText, setsearchText] = useState('');
  const [filteredData, setfilteredData] = useState([]);

  const searchAuthor = text => {
    setsearchText(text);

    let newArray =
      newsData &&
      newsData.filter((item, index) => {
        return item?.author?.includes(text);
      });
    setfilteredData(newArray);
  };
  const ItemSeparatorComponent = () => {
    return <View style={styles.seprator} />;
  };

  const onPressDetails = item => {
    navigation.navigate('Detail', item);
  };

  const renderItem = ({item, index}) => {
    return <Card item={item} onPressDetails={onPressDetails} />;
  };

  return (
    <View style={{flex: 1}}>
      <CommonHeader navigation={navigation} arrow={false} title={'Search'} />
      <View style={styles.searchBar}>
        <TextInput
          style={{flex: 1}}
          placeholder={'Search'}
          onChangeText={searchAuthor}
          value={searchText}
        />
        <Image
          style={{height: 30, width: 30}}
          source={require('../../assets/image/search.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          style={styles.list}
          ItemSeparatorComponent={ItemSeparatorComponent}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index + 'i'}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15,
    paddingHorizontal: 20,
    height: 60,
    borderColor: Colors.Gray,
    backgroundColor: Colors.White,
  },
  list: {
    marginTop: 15,
  },
  seprator: {
    paddingVertical: 10,
  },
});
