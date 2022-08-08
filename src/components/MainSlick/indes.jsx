import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slick from 'react-native-slick';

const items = [
  '버거킹',
  '쿠폰드려요',
  '쿠폰적용 최대49% 할인',
  '비벼먹는 생곤드레',
];

const pagenationComponent = (index, total, _) => {
  return (
    <View style={style.pagenation}>
      <Text style={style.pageText}>{`${index + 1} / ${total} 모두보기`}</Text>
    </View>
  );
};

function MainSlick() {
  return (
    <View style={style.container}>
      <Slick
        style={style.slick}
        loop={true}
        renderPagination={pagenationComponent}>
        {items.map(item => {
          return (
            <View key={item}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </Slick>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
  },
  slick: {
    padding: 10,
  },
  pagenation: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginBottom: 8,
    marginRight: 8,
    width: 70,
    padding: 3,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'rgb(62, 63, 64)',
  },
  pageText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 8,
  },
});

export default MainSlick;
