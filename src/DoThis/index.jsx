/* eslint-disable no-sparse-arrays */
import React from 'react';
import {Image, Text, View} from 'react-native';
import tw from 'twrnc';
import SectionContainer from '../components/SectionContainer';
import Item from './item';

const items = [
  [
    {
      url: 'https://file.mk.co.kr/meet/neds/2016/11/image_readtop_2016_776001_14785280932673899.jpg',
      des: '다정한 식당 이야기',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAFAQZUtObH38yw1IxO_Vy6jcRsx_5cyoEA&usqp=CAU',
      des: '사장님, 풍수해보험 무료로 신청하세요!',
    },
  ],
  [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mtYnZBG_nA25NdXtBx7AFthtIaUMcQlkQw&usqp=CAU',
      des: '백종원의 다정한 식당 이야기',
    },
    {
      url: 'https://i.ytimg.com/vi/s58gm03nPgE/maxresdefault.jpg',
      des: '배달의 민족은 배달하지 않는다',
    },
  ],
];

function DoThis() {
  return (
    <SectionContainer title="이런 일도 한답니다" viewText="전체보기">
      {
        <View style={tw`flex flex-row mr-1`}>
          {items.map(item => {
            return (
              <View>
                {item.map(it => {
                  return <Item url={it.url} des={it.des} />;
                })}
              </View>
            );
          })}
        </View>
      }
    </SectionContainer>
  );
}

export default DoThis;
