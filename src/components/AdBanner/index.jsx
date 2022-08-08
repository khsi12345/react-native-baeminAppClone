import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function AdBanner() {
  return (
    <View>
      <Image
        style={style.image}
        source={{
          uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoezlxMFGOh3M3XOcN4sb_xBjJpBwYCD1ovw&usqp=CAU`,
        }}
        resizeMode="stretch"
      />
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: 70,
  }
});

export default AdBanner;
