import React from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import Style from '../styles/postWalkStyle';
import {setTitle, setContents, setTag} from '../redux/walk';
import SelectTime from '../components/postWalks/SelectTime';
import SelectMap from '../components/postWalks/SelectMap';

interface IState {
  selectTag: string[];
}
interface IProps {
  settitle: (title: string) => void;
  setcontents: (contents: string) => void;
  settag: (tag: string) => void;
}
const PostWalk: React.FC<IState & IProps> = ({
  settitle,
  setcontents,
  settag,
  selectTag,
}) => {
  const tag = ['소형견', '중형견', '대형견'];

  const today = new Date();
  const dateFormat = (day: any) => {
    let yy = day.getFullYear().toString();
    let mm = (day.getMonth() + 1).toString();
    let dd = day.getDate().toString();
    return (
      yy + '-' + (mm[1] ? mm : '0' + mm[0]) + '-' + (dd[1] ? dd : '0' + dd[0])
    );
  };

  return (
    <ScrollView>
      <View style={Style.container}>
        <Text style={Style.text}>산책 등록 하기</Text>
        <TextInput
          style={Style.titleInput}
          autoCapitalize="none"
          placeholder="산책명"
          onChangeText={text => {
            settitle(text);
          }}
        />

        <TextInput
          style={Style.descriptInput}
          autoCapitalize="none"
          placeholder="산책 설명"
          onChangeText={text => {
            setcontents(text);
          }}
        />
        <Text style={Style.text}>날짜 : {dateFormat(today)}</Text>
        <SelectTime />

        <SelectMap />

        <Text style={Style.walkTag}>태그</Text>
        <View style={Style.walkTimeWrap}>
          {tag.map((el, index) => {
            return (
              <Button
                style={Style.walkTagBtnWrap}
                containerStyle={Style.walkTagBtn}
                type="outline"
                title={el}
                onPress={() => settag(el)}
                key={index}
              />
            );
          })}
        </View>
        <View style={Style.walkTimeWrap}>
          {selectTag
            ? selectTag.map((el, index) => {
                return (
                  <Text key={index} style={Style.text}>
                    {el}/{' '}
                  </Text>
                );
              })
            : null}
        </View>
        <Button
          containerStyle={Style.walkPet}
          type="clear"
          title="산책할 펫을 선택해주세요"
        />
        <Button
          containerStyle={Style.walkSubmit}
          type="outline"
          title="산책글등록"
        />
      </View>
    </ScrollView>
  );
};
function mapToStateToProps(state: any) {
  return {
    selectTag: state.walk.tag,
  };
}

function mapToDispatchToProps(dispatch: any) {
  return {
    settitle: (title: string) => {
      dispatch(setTitle(title));
    },
    setcontents: (contents: string) => {
      dispatch(setContents(contents));
    },
    settag: (tag: string) => {
      dispatch(setTag(tag));
    },
  };
}

export default connect<{}, IProps>(
  mapToStateToProps,
  mapToDispatchToProps,
)(PostWalk);
