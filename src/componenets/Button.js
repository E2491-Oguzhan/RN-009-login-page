import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}> {props.text} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#82ada9',
    padding: 15,
    width: Dimensions.get('window').width / 2,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
export { Button };
