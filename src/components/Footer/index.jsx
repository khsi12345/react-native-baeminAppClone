import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tw from 'twrnc';

function Footer() {
  const [toggle, setToggle] = useState(false);

  const infoToggleHandler = () => {
    setToggle(prev => !prev);
  };

  return (
    <View style={style.container}>
      <View style={[style.topInfo, tw`flex flex-row`]}>
        <View style={[style.border, tw`pr-1`]}>
        <Text style={[style.fontSize]}>사업자정보확인</Text>
        </View>
        <View style={[style.border, tw`px-1`]}>
        <Text style={[style.fontSize]}>이용약관</Text>
        </View>
        <View style={[style.border, tw`px-1`]}>
        <Text style={[style.fontSize]}>전자금융거래이용약관</Text>
        </View>
        <Text style={[style.fontSize, tw`pl-1`]}>개인정보처리방침</Text>
      </View>
      <View style={[tw`flex flex-row mb-1`]} onTouchEnd={infoToggleHandler}>
        <Text style={[tw`text-xs mr-2`]}>(주)우아한형제들</Text>
        {toggle ? <Text>위</Text> : <Text>아래</Text>}
      </View>
      {toggle ? (
        <View style={style.hideInfo}>
          <View style={[tw`flex flex-row`]}>
            <Text style={style.fontSize}>대표이사 김범준</Text>
            <Text style={style.fontSize}>사업자등록번호 120-87-65763</Text>
          </View>
          <View style={[tw`flex flex-row`]}>
            <Text style={style.fontSize}>통신판매업 서울 송파-0515</Text>
            <Text style={style.fontSize}>호스팅서비스제공자 (주)우아햔형제들</Text>
          </View>
          <View style={[tw`flex flex-row`]}>
            <Text style={style.fontSize}>woowahan.com</Text>
            <Text style={style.fontSize}>서울특별시 송파구 위례성대로 2 장은빌딩</Text>
          </View>
          <Text style={style.fontSize}>전자금융분쟁처리 Tel 1600-0987(유료), 080-849-0987(무료)</Text>
          <Text style={style.fontSize}>Fax 050-6050-0400</Text>
          <View style={[tw`flex flex-row`, style.boxInfo]}>
            <View style={[tw`w-1/2 flex justify-center`, style.border]}>
              <Text style={style.fontSize}>고객센터(대표)</Text>
              <Text style={style.fontSize}>1600-0987</Text>
              <Text style={style.fontSize}>24시간 운영, 연중무휴</Text>
            </View>
            <View style={[tw`w-1/2 flex justify-center`, style.paddingLeft]}>
              <Text style={style.fontSize}>고객센터(B마트/배민스토어)</Text>
              <Text style={style.fontSize}>1600-0025</Text>
              <Text style={style.fontSize}>오전 09:00~익일 새벽 01:00</Text>
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}

      <View>
        <Text style={style.fontSize}>
          (주)우아한형제들은 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
          따라서 (주)우아한형제들은 상품, 거래정보 및 거래에 대하여 책임을 지지
          않습니다.
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
container: {
    padding: 16,
}
,
  topInfo: {
    marginTop: 12,
    marginBottom: 12,
  },
  hideInfo: {
    fontSize: 10,
  },
  boxInfo: {
    marginTop: 12,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
  },
  paddingLeft: {
    paddingLeft: 12,
  },
  fontSize: {
    fontSize: 11,
  },
  border: {
    borderRightWidth: 1,
    // borderWidth: 1,
    // borderLeftWidth: 1,
    borderRightColor: 'black',
    // backgroundColor: 'yellow',
  },
});

export default Footer;
