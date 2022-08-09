import React from 'react';
import {Button, StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import tw from 'twrnc';

function Item({title, content}) {
  return (
    <View style={style.itemContainer}>
      <TouchableHighlight>
        <View style={style.textBox}>
          <Text style={tw`font-extrabold text-xl mb-2`}>{title}</Text>
          <Text style={style.text}>{content}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const style = StyleSheet.create({
  itemContainer: {
    padding: 16,
    width: '47%',
    height: 176,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  button: {},
  textBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    // lineHeight: 1.2,
  },
});

export default Item;
