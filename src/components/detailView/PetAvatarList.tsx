import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Style, {list} from '../../styles/detailViewStyle';
import {Avatar} from 'react-native-elements';
interface Props {
  selectPet: Function;
}
const PetAvatarList = ({selectPet}: Props) => {
  console.log(list);
  return (
    <View>
      <View style={Style.petAvatarTitleWrap}>
        <Text style={Style.sectionTitle}>참여개</Text>
      </View>
      <View style={Style.petAvatarWrap}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {list.map((avt, i) => {
            console.log(avt);
            return (
              <Avatar
                size="medium"
                rounded
                key={i}
                source={{
                  uri: avt.url,
                }}
                onPress={() => {
                  selectPet(i);
                }}
                containerStyle={{
                  marginRight: 10,
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
    // {/* {list.map((avt, i) => (
    //   <View key={i} style={{}}>
    //     <Avatar
    //       size="medium"
    //       rounded
    //       source={{
    //         uri: avt.url,
    //       }}
    //       onPress={() => {
    //         selectPet(i);
    //       }}
    //       containerStyle={{marginRight: '3%'}}
    //     />
    //   </View>
    // ))} */}
  );
};

export default PetAvatarList;
