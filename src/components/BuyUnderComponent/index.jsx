import React from 'react';
import {StyleSheet, View} from 'react-native';
import Item from './Item';

function BuyUnderComponent() {
  return (
    <View style={style.viewContainer}>
      <Item title="쇼핑라이브" />
      <Item title="선물하기" />
      <Item title="전국별미" />
    </View>
  );;
}

const style = StyleSheet.create({
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 14,
  },
});

export default BuyUnderComponent;
