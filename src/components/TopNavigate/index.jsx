import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import tw from 'twrnc';
import AllLogo from '../../asset/all.svg';
import Down from '../../asset/down.svg';
import My from '../../asset/my.svg';
import Noti from '../../asset/noti.svg';
import Search from '../../asset/search.svg';

function TopNavigate() {
  return (
    <View style={style.viewContainer}>
      <View style={[tw`flex flex-row`]}>
        <Text style={style.locationText}>충남 아산시 신창면 남성길...</Text>
        <View style={style.ll}>
          <Down width={'100%'} height={'100%'} fill={'#ffffff'} />
        </View>
        <View style={style.ll}>
          <AllLogo width={'100%'} height={'100%'} fill={'#ffffff'} />
        </View>
        <View style={style.ll}>
          <Noti width={'100%'} height={'100%'} fill={'#ffffff'} />
        </View>
        <View style={style.ll}>
          <My width={'100%'} height={'100%'} fill={'#ffffff'} />
        </View>
      </View>
      <View style={[tw`h-13 flex flex-row items-center`]}>
        <View
          style={{
            flex: 1,
            width: 12,
            height: '100%',
            position: 'absolute',
            left: 8,
            zIndex: 20,
          }}>
          <Search width={'100%'} height={'100%'} fill={'#06B6D4'} />
        </View>
        <TextInput
          style={[tw`w-full h-9 pl-6`, style.textInput]}
          placeholder="찾아라! 맛있는 음식과 맛집"
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  viewContainer: {
    display: 'flex',
    height: 100,
    // flexDirection: 'row',
    // alignItems: 'center',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'rgb(6, 182, 212)',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  locationText: {
    color: 'white',
    fontSize: 20,
  },
  textInput: {
    backgroundColor: 'white',
  },
  ll: {
    flex: 1,
    height: 20,
  },
});

export default TopNavigate;
