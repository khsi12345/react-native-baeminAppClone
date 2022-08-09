import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';
import Item from './Item';

function BuyComponent() {
  return (
    <View
      style={[
        tw`
        flex flex-row 
    `,
        style.viewContainer,
      ]}>
      <Item
        title="배달"
        content={`세상은 넓고
맛집은 많다
            `}
      />
      <Item
        title="포장"
        content={`가까운 가게는
직접 가지러 가지요
        `}
      />
    </View>
  );
}

const style = StyleSheet.create({
  viewContainer: {
    marginTop: 14,
    marginBottom: 14,
    // paddingLeft: 16,
    justifyContent: 'space-around',
  },
});

export default BuyComponent;
