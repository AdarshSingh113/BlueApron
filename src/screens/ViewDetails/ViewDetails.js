import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';

import {useState} from 'react';
import {fetchMarkerData} from '../../store/newsSlice';
const width = Dimensions.get('screen').width;

//import MapViewDirections from 'react-native-maps-directions';
// <MapViewDirections
//   origin={{latitude: userLocation.latitude, longitude:userLocation.longitude}}
//   destination={{latitude: 37.771707, longitude: -122.4053769}}
//   apikey={GOOGLE_MAPS_APIKEY}
// />

const ViewDetails = ({routes}) => {
  const mapRef = useRef(null);
  const markerDetails = useSelector(state => state.newsSlice.markerList);
  const [userLocation, setuserLocation] = useState({});
  console.log(markerDetails[0]);

  const dispatch = useDispatch();
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDYHdviiA1KFIIGTYE7PUBaVnJ6ol4wl9A';

  const zoomInMap = (latitude, longitude) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01, // Adjust the zoom level as needed
        longitudeDelta: 0.01,
      });
    }
  };

  useEffect(() => {
    getUserLocation();
    dispatch(fetchMarkerData()).then(({payload}) => {
      //console.log("'''''''''''''''''''''''''''''", payload);
    });
  }, []);

  // console.log('====================================');
  // console.log(markerDetails);
  // console.log('====================================');

  const getUserLocation = () => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'whenInUse',
      enableBackgroundLocationUpdates: false,
      locationProvider: 'playServices',
    });
    Geolocation.getCurrentPosition(
      (success = position => {
        // Success callback function
        console.log('Position:', position);
        setuserLocation(position.coords);
      }),
      (error = error => {
        // Error callback function
        console.error('Error:', error);
      }),
      (options = {
        timeout: 5000, // Timeout in milliseconds
        maximumAge: 100, // Maximum age of a cached position
        enableHighAccuracy: true, // Whether to use high accuracy mode
      }),
    );
  };

  console.log(userLocation);
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <MapView
        ref={mapRef}
        onMapReady={() => {
          getUserLocation();
        }}
        showsUserLocation={true}
        style={{...StyleSheet.absoluteFillObject}}
        region={{
          latitude: userLocation.latitude ?? 28.538,
          longitude: userLocation.longitude ?? 77.219312,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}>
        {markerDetails &&
          markerDetails?.map((marker, index) => {
            return (
              <Marker
                pinColor="red"
                key={index}
                coordinate={{
                  latitude: parseFloat(marker?.Latitude?.N),
                  longitude: parseFloat(marker?.Longitude?.N),
                }}
                title={marker.Address.S}
                description={marker.Location.S}
              />
            );
          })}
      </MapView>
      <View style={{position: 'absolute'}}>
        <FlatList
          initialNumToRender={10}
          pagingEnabled
          data={markerDetails}
          horizontal
          renderItem={({item}) => {
            return (
              <View
                style={{
                  borderWidth: 2,
                  borderColor: 'black',
                  backgroundColor: 'transparent',
                  height: 200,
                  width: width * 0.9,
                  marginHorizontal: width * 0.05,
                  alignSelf: 'center',
                  borderRadius: 20,
                  marginBottom: 25,
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 5,
                    justifyContent: 'center',
                  }}>
                  <Text>Location : {item.Location.S}</Text>
                  <Image
                    source={
                      item.Electricity_Status.BOOL
                        ? require('../../assets/image/flash.png')
                        : require('../../assets/image/flashBlank.png')
                    }
                    style={{height: 30, width: 30}}
                  />
                </View>
                <Text>Total Battery : {item?.Total_Battery_Quantity?.N}</Text>
                <Text>
                  {' '}
                  Station : {item.Station_Status.S ? 'Online' : 'Offline'}{' '}
                </Text>
              </View>
            );
          }}
          onScroll={event => {
            const index = event.nativeEvent.contentOffset.x / width;
            const {Latitude, Longitude} = markerDetails[Math.floor(index)];
            zoomInMap(parseFloat(Latitude.N), parseFloat(Longitude.N));
          }}
        />
      </View>
    </View>
  );
};

export default ViewDetails;

const styles = StyleSheet.create({});
