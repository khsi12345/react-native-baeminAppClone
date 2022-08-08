import React from 'react';
import SectionContainer from '../SectionContainer';
import Item from './item';

const items = [
  {
    location: '경기',
    storeName: '매일식품',
    des: `어머니의 손맛을
그대로 담았어요`,
  },
  {
    location: '서울',
    storeName: '송주불냉면',
    des: `내 맘대로 만들어 먹는
매콤한 냉면`,
  },
  {
    location: '경남',
    storeName: '남해중현떡집',
    des: '재료 본연의 맛을 담았어요',
  },
  {
    location: '광주',
    storeName: '감동',
    des: `신선한 산지
농산물의 달콤한 맛`,
  },
  {
    location: '경기',
    storeName: '신호닭발',
    des: `직화 향기 가득
매콤한 닭발`,
  },
  {
    location: '경북',
    storeName: '다농이네',
    des: `제철 농산물과
신선한 먹거리`,
  },
];

function NationwideTaste() {
  return (
    <SectionContainer title="전국의 별미가 한가득" viewText="전체보기">
      {items.map(item => {
        return (
          <Item
            location={item.location}
            storeName={item.storeName}
            des={item.des}
          />
        );
      })}
    </SectionContainer>
  );
}

export default NationwideTaste;
