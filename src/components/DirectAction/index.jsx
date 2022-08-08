import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const items = ['포인트', '쿠폰함', '선물함', '찜'];

function DirectAction() {
  return (
    <View style={style.container}>
      {items.map((item, i) => {
        return (
          <View key={item} style={[style.item, i === 3 && style.borderRemove]}>
            <Text>아이콘</Text>
            <Text>{item}</Text>
          </View>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    height: 60,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  item: {
    // flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: '100%',
    // borderRadius: 12,
    borderRightWidth: 1,
    borderRightColor: 'rgb(237, 231, 230)',
  },
  borderRemove: {
    borderRightWidth: 0,
  },
});

export default DirectAction;
