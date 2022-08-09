import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import tw from 'twrnc';

function Item({title}) {
  return (
    <TouchableHighlight style={[style.itemBox, tw`rounded-md`]}>
      <View style={style.contentBox}>
        <Text>아이콘</Text>
        <Text style={tw`font-bold`}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  itemBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: 60,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  contentBox: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default Item;
