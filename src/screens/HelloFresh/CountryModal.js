import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import Flags from '../../utils/Flags';

const CountryModal = ({navigation}) => {
  console.log(Flags[0]?.flags?.png);
  const [selectedCountry, setSelectedCountry] = useState(Flags[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const selectCountry = country => {
    setSelectedCountry(country);
    setModalVisible(false);
  };
  // Render item for country list
  const renderCountryItem = ({item}) => (
    <TouchableOpacity
      onPress={() => selectCountry(item)}
      style={{flexDirection: 'row', marginBottom: 15}}>
      <Image style={{height: 25, width: 30}} source={{uri: item?.flags?.png}} />
      <Text style={{marginLeft: 8}}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: 10}}>
      {/* Button to open the modal */}
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => setModalVisible(true)}>
        <Image
          style={{height: 20, width: 25, marginRight: 5}}
          source={{uri: selectedCountry?.flags?.png}}
        />
        <Text>{selectedCountry.name}</Text>
        <Image
          style={{height: 20, width: 20, marginLeft: 5}}
          source={require('../../assets/image/HelloFresh/down.png')}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              height: '90%',
              width: '90%',
            }}>
            <Text style={{fontSize: 20}}>Select a Country</Text>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 0.2,
                marginVertical: 20,
                width: '100%',
              }}></View>
            <FlatList
              data={Flags}
              renderItem={renderCountryItem}
              keyExtractor={(item, index) => index + 'i'}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CountryModal;

const styles = StyleSheet.create({});
