import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';

function Item({viewer, tag, keyword, subKeyword, per, pay}) {
  return (
    <View style={style.container} key={`${viewer}${pay}`}>
      <View style={style.thumbnail}>
        <Text>{viewer}</Text>
        <View>
          <Text>{tag}</Text>
          <Text style={style.keyword} numberOfLines={1}>
            {keyword}
          </Text>
        </View>
      </View>
      <View style={[style.detailContent, tw`pr-3`]}>
        <View style={style.image} />
        <View style={style.text}>
          <Text style={style.subKeyword} numberOfLines={2}>
            {subKeyword}
          </Text>
          <View style={tw`flex flex-row justify-between`}>
            <Text style={[style.per, tw`font-semibold`]}>{per}</Text>
            <Text style={tw`font-bold`}>{pay}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginRight: 10,
    width: 200,
  },
  thumbnail: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 12,
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  image: {
    flex: 1,
    height: 54,
    marginRight: 8,
    backgroundColor: 'pink',
    borderRadius: 6,
  },
  text: {
    flex: 2,
  },
  subKeyword: {
    fontSize: 12,
    lineHeight: 14,
  },
  per: {
    color: 'red',
  },

  detailContent: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
  },
});

export default Item;
