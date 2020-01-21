import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import {chats} from '../../fakeData';
const id = 1;

const ChatText = data => {
  const {item} = data;
  const isMine = item.id === id ? true : false;
  const txtStyle = isMine ? ChatStyle.myChat : ChatStyle.chats;
  const conStyle = isMine
    ? ChatStyle.myLineContainer
    : ChatStyle.lineContainers;

  return (
    <View style={conStyle}>
      {isMine ? <Text style={ChatStyle.date}>{item.date}</Text> : null}
      <Text style={txtStyle}>{item.text}</Text>
      {!isMine ? <Text style={ChatStyle.date}>{item.date}</Text> : null}
    </View>
  );
};

const Chat = () => {
  const [chatArr, setChatArr] = useState([...chats].reverse());
  const [text, setText] = useState('');
  const submit = () => {
    console.log('submit');
    !text
      ? null
      : setChatArr([
          {
            id,
            text,
            date: '시간',
          },

          ...chatArr,
        ]);
    console.log(chatArr);
    setText('');
  };
  return (
    <View style={ChatStyle.container}>
      <View style={ChatStyle.chatContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          inverted={true}
          data={chatArr}
          renderItem={c => ChatText(c)}
        />
      </View>

      <TextInput
        autoFocus={true}
        style={ChatStyle.input}
        placeholder="메시지를 입력하세요."
        value={text}
        onChangeText={t => {
          setText(t);
        }}
        onSubmitEditing={() => {
          submit();
        }}
        blurOnSubmit={false}
      />
    </View>
  );
};
const ChatStyle = StyleSheet.create({
  input: {height: 50, padding: 10},
  container: {flex: 1},
  chatContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 20,
  },
  myLineContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lineContainers: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  myChat: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'pink',
    marginBottom: 10,
    borderRadius: 30,
  },
  chats: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'orange',
    marginBottom: 10,
    borderRadius: 30,
  },
  date: {
    color: 'grey',
    margin: 10,
  },
});

export default Chat;
