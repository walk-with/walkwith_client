import React, {ReactElement} from 'react';
import {ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';

interface Props {
  navigation: any;
  token: any;
}

function mapStateToProps(state: {user: {token: string}}) {
  return {token: state.user.token};
}

function PetEdit({navigation, token}: Props): ReactElement {
  return (
    <ScrollView>
      <Text>펫 수정</Text>
    </ScrollView>
  );
}

export default connect(mapStateToProps)(PetEdit);
