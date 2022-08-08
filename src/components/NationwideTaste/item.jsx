import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';

function Item({location, storeName, des}) {
  return (
    <View style={style.container}>
      <View>
        <Text>{location}</Text>
        <Text style={tw`font-bold my-2`}>{storeName}</Text>
        <Text style={[style.lineHeight, style.fontSize]}>{des}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 10,
    paddingLeft: 22,
    paddingBottom: 22,
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 8,
  },
  lineHeight: {
    lineHeight: 12,
  },
  fontSize: {
    fontSize: 10,
  }
});

export default Item;
