import React, {ReactElement, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import homeStyle from '../styles/homeStyle';

interface Props {
  navigation: any;
}

function List({navigation}: Props): ReactElement {
  const {selectedWalk, selectWalk} = useState({});
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

  return (
    <ScrollView style={homeStyle.listStyle}>
      {list.map((l, i) => (
        <ListItem
          key={i}
          leftAvatar={{source: {uri: l.avatar_url}}}
          title={l.name}
          subtitle={l.subtitle}
          rightElement={<Text>9:00 ~ 12:00</Text>}
          bottomDivider
          onPress={() => {
            navigation.navigate('detailView', {title: '테스트 워크 포스트'});
          }}
        />
      ))}
    </ScrollView>
  );
}

export default List;
