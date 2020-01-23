import React, {useState} from 'react';
import {View, Button, Dimensions} from 'react-native';
import {ButtonGroup} from 'react-native-elements';

import Style from '../styles/detailViewStyle';
import {list} from '../fakeData';
import {Chat, DetailInfo} from '../components/detailView';

import {hideTab} from '../redux/navOption';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

interface Props {
  hideTabBar: Function;
}
const height = Dimensions.get('window').height;
const enroll = false;
const btnMsg = '작성자인 경우'
  ? '수정하기'
  : '참여했다면'
  ? '취소하기'
  : '참여하기';

const DetailView = ({hideTabBar}: Props) => {
  const [selectedIndex, setSelected] = useState(0);
  const [selectedPet, changePet] = useState(list[0]);
  const [chatActive, setActive] = useState(enroll);
  const buttons = ['정보', '채팅'];

  const isFocused = useIsFocused();
  isFocused ? hideTabBar() : null;

  const selectView = (index: number) => {
    setSelected(index);
  };
  const props = {
    selectPet: (index: number) => changePet(list[index]),
    selectedPet,
    list,
  };

  return (
    <View style={{flex: 1}}>
      <View style={Style.container}>
        <ButtonGroup
          onPress={selectView}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={Style.buttonGroup}
          disabled={chatActive ? false : true}
        />
        {selectedIndex ? <Chat /> : <DetailInfo props={props} />}
      </View>
      {selectedIndex ? null : (
        <View>
          <Button
            title="참여하기"
            onPress={() => {
              console.log('참여');
              //참여여부 데이터
              setActive(true);
            }}
          />
        </View>
      )}
    </View>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
  hideTabBar: () => dispatch(hideTab()),
});
export default connect(null, mapDispatchToProps)(DetailView);
