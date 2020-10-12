import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';

const Input = ({ holder }) => {
  // const {holder} = props

  return (
    <View style={styles.container}>
      <TextInput placeholder={holder}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    margin: 10,
    borderRadius: 30,
    marginVertical: 15,
  },
});
export { Input };
