import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Item({item, index, length}) {
  return (
    <View
      style={[style.item, index + 1 === length && style.lastItem]}
      key={item}>
      <Text>{item}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  item: {
    padding: 12,
    marginRight: 10,
    width: 280,
    height: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'whitesmoke',
  },
  lastItem: {
    marginRight: 10,
  },
});

export default Item;
