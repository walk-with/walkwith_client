import React, {useState} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import Style from '../../styles/postWalkStyle';

const SelectTime: React.FC<{}> = ({}) => {
  const [startShow, setStartShow] = useState(false);
  const [dateStartTime, setStartDate] = useState(new Date());
  const [endShow, setEndShow] = useState(false);
  const [dateEndTime, setEndDate] = useState(new Date());
  const showStartTimepicker = () => {
    setStartShow(true);
  };
  const setStartDateTime = (event: any, date: any) => {
    date = date || dateStartTime;
    setStartDate(date);
    setStartShow(false);
  };
  const showEndTimepicker = () => {
    setEndShow(true);
  };
  const setEndDateTime = (event: any, date: any) => {
    date = date || dateEndTime;
    setEndDate(date);
    setEndShow(false);
  };
  const timeFormat = (day: any) => {
    let hh = day.getHours().toString();
    let mm = day.getMinutes().toString();
    return (hh[1] ? hh : '0' + hh[0]) + ':' + (mm[1] ? mm : '0' + mm[0]);
  };

  return (
    <ScrollView>
      <View style={Style.walkTimeWrap}>
        <Button
          onPress={showStartTimepicker}
          title="시작 시간 선택"
          type="outline"
        />
        <Button
          onPress={showEndTimepicker}
          title="끝나는 시간 선택"
          type="outline"
        />
      </View>
      <View style={Style.walkTimeWrap}>
        <Text style={Style.timeText}>
          시작 : {timeFormat(dateStartTime)} ~{' '}
        </Text>
        <Text style={Style.timeText}>끝 : {timeFormat(dateEndTime)}</Text>
      </View>

      {startShow && (
        <DateTimePicker
          value={dateStartTime}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={setStartDateTime}
        />
      )}

      {endShow && (
        <DateTimePicker
          value={dateEndTime}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={setEndDateTime}
        />
      )}
    </ScrollView>
  );
};

// function mapToStateToProps(state: any) {
//   return {
//     selectTag: state.walk.tag,
//   };
// }

// function mapToDispatchToProps(dispatch: any) {
//   return {
//     settitle: (title: string) => {
//       dispatch(setTitle(title));
//     },
//     setcontents: (contents: string) => {
//       dispatch(setContents(contents));
//     },
//     settag: (tag: string) => {
//       dispatch(setTag(tag));
//     },
//   };
// }

// export default connect<{}, IProps>(
//   mapToStateToProps,
//   mapToDispatchToProps,
// )(SelectTime);

export default SelectTime;
