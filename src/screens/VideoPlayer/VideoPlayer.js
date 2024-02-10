import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View style={{flex: 1}}>
      <Video
        style={{height: 200, width: 200}}
        source={require('../../assets/image/h.mp4')} // Can be a URL or a local file.
        // source={{
        //   uri: 'https://reaperbucket.s3.eu-north-1.amazonaws.com/folder/h.mp4',
        // }}
        controls={true}
        resizeMode="contain"
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({});
