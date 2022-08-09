import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';
import RightArrow from '../../asset/rightArrow.svg';

function SectionContainer({title, viewText, children}) {
  return (
    <View style={style.container}>
      <View style={style.topContent}>
        <Text style={tw`font-extrabold text-xl`}>{title}</Text>
        <View style={tw`flex- flex-row items-center`}>
          <Text>{viewText}</Text>
          <View>
            <RightArrow width={20} height={10} fill={'#000000'} />
          </View>
        </View>
      </View>
      <ScrollView
        style={style.mainContent}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 16,
    paddingBottom: 10,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  topContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default SectionContainer;
