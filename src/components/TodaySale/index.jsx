import React from 'react';
import SectionContainer from '../SectionContainer';
import Item from './item';

const saleItems = [
  '투존치킨',
  '빕스',
  '도미노피자',
  '에그슬럿',
  '빅스타피자',
  '오지버거',
  '피자헛',
  '일미리 금계찜닭',
  '치킨마루',
  '치킨더홈',
];

function TodaySale() {
  return (
    <SectionContainer title="오늘의 할인" viewText="전체보기">
      {saleItems.map((item, index) => (
        <Item item={item} index={index} length={saleItems.length} />
      ))}
    </SectionContainer>
  );
}

export default TodaySale;
