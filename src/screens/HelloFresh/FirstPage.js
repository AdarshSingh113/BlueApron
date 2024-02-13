import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import CountryModal from './CountryModal';

const FirstPage = ({navigation}) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const moveToLogin = () => {
    navigation.navigate('Login');
  };
  const toggleBottomSheet = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };
  const moveToPlans = () => {
    navigation.navigate('CountryModal');
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          marginTop: 20,
        }}>
        <CountryModal />
        <TouchableOpacity onPress={moveToLogin} style={styles.LoginButton}>
          <Text style={{fontWeight: '500', fontSize: 16, color: 'green'}}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          style={{
            height: 250,
            width: 250,
            borderRadius: 125,
          }}
          source={{
            uri: 'https://img.hellofresh.com/w_2048,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/gb/cms/homepage/homepage%20to%20Contentful/US-homepage-image.png',
          }}
        />
      </View>
      <View style={{marginHorizontal: 15, marginTop: 20}}>
        <Text style={{color: 'black', fontWeight: '600', fontSize: 25}}>
          Eat better
        </Text>
        <Text style={{color: 'green', fontWeight: '600', fontSize: 25}}>
          Everyday!
        </Text>
        <Text style={{color: 'black', fontWeight: '300', fontSize: 15}}>
          Get fresh ingredients & easy-to-follow recipe cards delivered to the
          door.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            height: 39,
            width: 360,
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green',
            borderRadius: 4,
          }}>
          <Text style={{fontWeight: '500', fontSize: 16, color: 'white'}}>
            Tell me more
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleBottomSheet}
          style={{
            height: 39,
            width: 360,
            borderColor: 'green',
            borderWidth: 1,
            alignItems: 'center',
            borderRadius: 4,
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: '500', fontSize: 16, color: 'green'}}>
            Select your plan
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isBottomSheetOpen}
          onRequestClose={() => {
            // toggleBottomSheet();
          }}>
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={toggleBottomSheet}>
            <View style={styles.bottomSheet}>
              <ImageBackground
                source={{
                  uri: 'https://img.hellofresh.com/hellofresh_website/us/lp/about/201909-responsible-ingredient-sourcing-mid.jpg',
                }}
                style={{height: 175, width: '100%'}}></ImageBackground>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Text>Get this exclusive offer when you</Text>
                <Text>sign up now:</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                }}>
                <Text>18 FREE MEALS (ACROSS 9 BOXES, VARIES BY PLAN) +</Text>
                <Text>FIRST BOX SHIPS FREE</Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 20,
                  alignItems: 'center',
                  width: '100%',
                }}>
                <TouchableOpacity
                  onPress={moveToPlans}
                  style={{
                    height: 39,
                    width: 360,
                    marginVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'green',
                    borderRadius: 4,
                  }}>
                  <Text
                    style={{fontWeight: '500', fontSize: 16, color: 'white'}}>
                    I'll take it
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 39,
                    width: 360,
                    borderColor: 'green',
                    borderWidth: 1,
                    alignItems: 'center',
                    borderRadius: 4,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontWeight: '500', fontSize: 16, color: 'green'}}>
                    Maybe later
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  LoginButton: {
    height: 40,
    width: 80,
    borderColor: 'green',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  bottomSheet: {
    backgroundColor: 'white',
    width: '100%',
    height: '50%', // Set the height of the bottom sheet to 1/4 of the screen
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Aligns the modal at the bottom of the screen
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
