import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Style from '../../styles/detailViewStyle';
import {PetCard, WalkCard, PetAvatarList} from '../detailView';

interface Props {
  props: Object;
}

const DetailInfo = ({props}: Props) => {
  const {selectPet, selectedPet, list}: any = props;
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Style.section}>
          <WalkCard />
        </View>
        <View style={Style.petListSec}>
          <PetAvatarList selectPet={selectPet} list={list} />
        </View>
        <View style={Style.section}>
          <PetCard selectedPet={selectedPet} />
        </View>
        <View style={Style.mapSec}>
          <Text style={Style.sectionTitle}>map</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailInfo;
