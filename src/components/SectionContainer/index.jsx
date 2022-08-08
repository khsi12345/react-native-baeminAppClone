import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

function SectionContainer({title, viewText, children}) {
  return (
    <View style={style.container}>
      <View style={style.topContent}>
        <Text>{title}</Text>
        <View>
          <Text>{viewText}</Text>
          <Text />
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
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default SectionContainer;
