import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Style from '../../styles/detailViewStyle';
import {Avatar} from 'react-native-elements';
interface Props {
  selectPet: Function;
  list: Array<Object>;
}

const PetAvatarList = ({selectPet, list}: Props) => {
  const avatar = (pet: any, i: number) => {
    return (
      <Avatar
        size="medium"
        rounded
        key={i}
        source={{
          uri: pet.url,
        }}
        onPress={() => {
          selectPet(i);
        }}
        containerStyle={{
          marginRight: 10,
        }}
      />
    );
  };
  return (
    <View>
      <View style={Style.petAvatarTitleWrap}>
        <Text style={Style.sectionTitle}>참여개</Text>
      </View>
      <View style={Style.petAvatarWrap}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {list.map((avt, i) => {
            return avatar(avt, i);
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default PetAvatarList;
