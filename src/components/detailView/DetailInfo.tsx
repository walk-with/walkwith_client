import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import Style, {list} from '../../styles/detailViewStyle';
import PetCard from './PetCard';
import WalkCard from './WalkCard';
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
        <View style={Style.petAvatarTitleWrap}>
          <Text style={Style.sectionTitle}>참여개</Text>
        </View>
        <View style={Style.petAvatarWrap}>
          {list.slice(0, 5).map((avt, i) => (
            <Avatar
              size="medium"
              key={i}
              rounded
              source={{
                uri: avt.url,
              }}
              onPress={() => {
                selectPet(i);
              }}
              containerStyle={{marginRight: '3%'}}
            />
          ))}
          <Avatar
            size="medium"
            rounded
            icon={{name: 'ellipsis-h', type: 'font-awesome'}}
            overlayContainerStyle={{backgroundColor: 'pink'}}
            containerStyle={{marginRight: '3%'}}
          />
        </View>
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
