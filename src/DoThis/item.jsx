import React, { useState } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function Item({url, des}) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <View style={style.container}>
      <View>
        <Image
          style={[style.iamge, {width, height}]}
          onLoad={(event) => {
            setWidth(event.nativeEvent.source.width);
            setHeight(event.nativeEvent.source.height);
          }}
          source={{uri: `${url}`}}
          // resizeMode="contain"
        />
      </View>
      <Text style={{ flex:1 ,width: '100%', height: '20%'}}>{des}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    // flex: 0,
    // flexGrow: 1,
    // flexShrink: 1,
    // flex: 1,
    // width: '100%',
    // height: '100%',
    // backgroundColor: 'red',
    // borderBottomWidth: 1,
  },
  iamge: {
    flex: 2,
    minWidth: '100%',
    minHeight: '70%',
    maxWidth: '100%',
    // borderWidth: 2,
    backgroundColor: 'yellow',
  },
});

export default Item;
