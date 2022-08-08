import React from 'react';
import SectionContainer from '../SectionContainer';
import Item from './item';

const items = [
  '밥이 보약',
  '한국인은 밤심',
  '밥은 먹고 다니니',
  '그래도 식사는 챙겨드세요',
  '밥심은 국력이다',
];

function DoGift() {
  return (
    <SectionContainer title="마음을 선물해보세요" viewText="전체보기">
      {items.map(item => {
        return <Item key={item} title={item} />;
      })}
    </SectionContainer>
  );
}

export default DoGift;
