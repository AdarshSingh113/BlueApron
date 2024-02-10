import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const TextInputComponent = ({onChange, initialValue, placeholder}) => {
  return (
    <View>
      <Text style={styles.text}></Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={placeholder == 'password' ? true : false}
        value={initialValue}
        onChangeText={onChange}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 20,
    height: 60,
    fontSize: 20,
    padding: 20,
  },
  text: {
    padding: 10,
  },
});
