import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import tw from 'twrnc';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import BellIcon from 'react-native-vector-icons/EvilIcons';

function TopNavigate() {
  return (
    <>
      <View style={style.viewContainer}>
        <Text style={style.locationText}>충남 아산시 신창면 남성길...</Text>
        <Text>DA</Text>
        <Text>AM</Text>
        <Text>Alam</Text>
        <Text>MB</Text>
        {/* <Icon name="th-large" size={20} /> */}
        {/* <BellIcon name="bell" size={20} /> */}
      </View>
      <View
        style={[style.viewContainer, tw`h-13 flex items-center rounded-b-lg`]}>
        <TextInput
          style={[tw`w-full h-9 pl-6`, style.textInput]}
          placeholder="찾아라! 맛있는 음식과 맛집"
        />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'rgb(6, 182, 212)',
  },
  locationText: {
    color: 'white',
    fontSize: 20,
  },
  textInput: {
    backgroundColor: 'white',
  },
});

export default TopNavigate;
