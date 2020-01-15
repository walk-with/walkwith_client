import React from 'react';
import {View, Text} from 'react-native';
import {Card, Avatar} from 'react-native-elements';
import Style from '../../styles/detailViewStyle';
import CardInfo from './CardInfo';

interface Props {
  selectedPet: Object;
}

const PetCard = ({selectedPet}: Props) => {
  const createList = () => {
    let listChildren = [];
    var id = 0;
    for (let key in selectedPet) {
      const notToPrint = ['url', 'tag'];
      if (notToPrint.indexOf(key) < 0) {
        listChildren.push(
          <CardInfo key={id++} title={key} descript={selectedPet[key]} />,
        );
      }
    }
    return listChildren;
  };
  return (
    <Card containerStyle={Style.petCardContainer}>
      <View style={Style.petCardSecWrap}>
        <View style={Style.petCardLeft}>
          <Avatar
            rounded
            size={90}
            source={{
              uri: selectedPet.url,
            }}
          />
        </View>
        <View style={Style.petCardRight}>
          {createList()}
          <Text style={Style.tagText}>#{selectedPet.tag}</Text>
        </View>
      </View>
    </Card>
  );
};

export default PetCard;
