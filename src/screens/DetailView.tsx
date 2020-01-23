import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import Style, {list} from '../styles/detailViewStyle';
import {Chat, DetailInfo} from '../components/detailView/index';

const DetailView = () => {
  const [selectedIndex, setSelected] = useState(0);
  const [selectedPet, changePet] = useState(list[0]);
  const selectView = (index: number) => {
    setSelected(index);
  };
  const selectPet = (index: number) => {
    changePet(list[index]);
  };
  const buttons = ['정보', '채팅'];
  return (
    <ScrollView>
      <View style={Style.container}>
        <ButtonGroup
          onPress={selectView}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={Style.buttonGroup}
        />
        {selectedIndex ? (
          <Chat />
        ) : (
          <DetailInfo selectPet={selectPet} selectedPet={selectedPet} />
        )}
      </View>
    </ScrollView>
  );
};

export default DetailView;
