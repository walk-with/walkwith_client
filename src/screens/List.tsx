import React, {ReactElement} from 'react';
import {ScrollView, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import homeStyle from '../styles/homeStyle';

interface Props {
  list: Array<{
    name: string;
    avatar_url: string;
    subtitle: string;
    coord: {latitude: number; longitude: number};
  }>;
  curMarker: number;
}

export default function List({list, curMarker}: Props): ReactElement {
  return (
    <ScrollView style={homeStyle.listStyle}>
      {list.map((l, i) => (
        <ListItem
          containerStyle={i === curMarker ? {backgroundColor: 'red'} : {}}
          key={i}
          leftAvatar={{source: {uri: l.avatar_url}}}
          title={l.name}
          subtitle={l.subtitle}
          rightElement={<Text>9:00 ~ 12:00</Text>}
          bottomDivider
        />
      ))}
    </ScrollView>
  );
}
