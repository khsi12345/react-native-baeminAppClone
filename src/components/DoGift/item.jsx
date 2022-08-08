import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Item({title}) {
  return (
    <View style={style.container}>
      <View style={style.thunmbnail} />
      <Text style={[style.text]}>{title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    width: 140,
    height: 200,
    // backgroundColor: 'orange',
  },
  thunmbnail: {
    flex: 2,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    marginTop: 10,
    height: '10%',
    // backgroundColor: 'green',
  }
});

export default Item;
