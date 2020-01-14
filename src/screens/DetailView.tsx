import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {ButtonGroup, Card, Avatar} from 'react-native-elements';
const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];
const DetailView = () => {
  const [selectedIndex, setSelected] = useState(0);
  const updateIndex = async (index: number) => {
    setSelected(index);
  };
  const buttons = ['정보', '채팅'];
  const width = Dimensions.get('window').width;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{
          height: 40,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
        }}
      />
      <View style={{flex: 1, margin: 2}}>
        <Card containerStyle={{width: width * 0.95, borderRadius: 10}}>
          <Text style={{marginBottom: 10}}>시간 :</Text>
          <Text style={{marginBottom: 10}}>만나는 곳 :</Text>
          <Text style={{marginBottom: 10}}>tags</Text>
        </Card>
      </View>
      <View style={{flex: 1, margin: 2}}>
        <View style={{flex: 1}}>
          <Text>참여개</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {list.map(avt => (
            <Avatar
              rounded
              source={{
                uri: avt.avatar_url,
              }}
            />
          ))}
        </View>
      </View>
      <View style={{flex: 1, margin: 2}}>
        <Text>pet card</Text>
      </View>
      <View style={{flex: 1, margin: 2}}>
        <Text>map</Text>
      </View>
    </View>
  );
};

export default DetailView;
