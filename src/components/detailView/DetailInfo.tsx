import React from 'react';
import {View, Text} from 'react-native';
import Style from '../../styles/detailViewStyle';
import PetCard from './PetCard';
import WalkCard from './WalkCard';
import PetAvatarList from './PetAvatarList';

interface Props {
  selectPet: Function;
  selectedPet: Object;
}
const DetailInfo = ({selectPet, selectedPet}: Props) => {
  return (
    <View>
      <View style={Style.section}>
        <WalkCard />
      </View>
      <View style={Style.petListSec}>
        <PetAvatarList selectPet={selectPet} />
      </View>
      <View style={Style.section}>
        <PetCard selectedPet={selectedPet} />
      </View>
      <View style={Style.mapSec}>
        <Text style={Style.sectionTitle}>map</Text>
      </View>
    </View>
  );
};

export default DetailInfo;
