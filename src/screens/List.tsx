import React, {ReactElement} from 'react';
import {ScrollView, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import homeStyle from '../styles/homeStyle';

interface Props {
  list: Array<{
    title: string;
    Longitude: string;
    Latitude: string;
    time: string;
    tag: string[];
    image: string;
  }>;
  curMarker: number;
  navigation: any;
}

// const {selectedWalk, selectWalk} = useState({});

export default function List({
  list,
  curMarker,
  navigation,
}: Props): ReactElement {
  return (
    // TODO: 주변에 없을 때, (위도, 경도, 오늘 날짜)

    <ScrollView style={homeStyle.listStyle}>
      {list.length === 0 && (
        <Text>주변에 등록된 산책이 없습니다. 새로운 산책을 만들어보세요!</Text>
      )}
      {list.map((l, i) => (
        <ListItem
          containerStyle={i === curMarker ? {backgroundColor: '#9a86ee'} : {}}
          key={i}
          leftAvatar={{source: {uri: l.image}}}
          title={l.title}
          //subtitle={l.tag.join(' ')}
          rightElement={<Text>{l.time}</Text>}
          bottomDivider
          onPress={() => {
            navigation.navigate('detailView', {title: '테스트 워크 포스트'});
          }}
        />
      ))}
    </ScrollView>
  );
}
