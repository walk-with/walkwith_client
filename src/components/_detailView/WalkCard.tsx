import React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-elements';
import Style from '../../styles/detailViewStyle';
import CardInfo from './CardInfo';

const WalkCard = () => {
  const tags = ['태그1', '태그2', '태그3'];
  const walk = {
    시간: '오후 7시 30분',
    '만나는 곳': '근린공원 정자 앞',
  };
  const createWalkInfo = () => {
    let listChildren = [];
    let id = 0;
    for (let keys in walk) {
      listChildren.push(
        <CardInfo key={id++} title={keys} descript={walk[keys]} />,
      );
    }
    return listChildren;
  };
  return (
    <Card containerStyle={Style.cardContainer}>
      <View style={Style.walkCardSecWrap}>
        <View style={Style.petCardRight}>{createWalkInfo()}</View>
        <View style={Style.tagContainer}>
          {tags.map((tag, i) => {
            return (
              <Text key={i} style={Style.tagText}>
                #{tag}
              </Text>
            );
          })}
        </View>
      </View>
    </Card>
  );
};
export default WalkCard;
