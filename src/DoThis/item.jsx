import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function Item({url, des}) {
  return (
    <View style={style.container}>
      <View>
        <Image
          style={style.iamge}
          source={{uri: `${url}`}}
          resizeMode="contain"
        />
      </View>
      <Text>{des}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: 'red',
  },
  iamge: {
    width: '100%',
    height: 100,
    borderWidth: 2,
  },
});

export default Item;
