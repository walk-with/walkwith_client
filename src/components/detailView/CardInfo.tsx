import React from 'react';
import {View, Text} from 'react-native';
import Style from '../../styles/detailViewStyle';
interface props {
  title: string;
  descript: string;
}
const CardInfo = ({title, descript}: props) => {
  return (
    <View style={Style.cardInfoList}>
      <Text style={Style.cardInfoTitle}>{title}</Text>
      <Text style={Style.cardInfo}>{descript}</Text>
    </View>
  );
};

export default CardInfo;
