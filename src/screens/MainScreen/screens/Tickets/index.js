import React from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';
import {ListTickets} from '@compoents';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {EventApp} from '@helpers';

export default class TicketsScreen extends BaseScreen {
  constructor(props) {
    super(props);
    console.log('props:', props);
  }
  render() {
    return (
      <>
        {this.renderAppBar('Tickets')}
        <View
          style={{
            flex: 1,
          }}>
          <ListTickets />
          <ActionButton
            onPress={() => {
              EventApp.EmitToScreen('AddTicketsScreen', {});
            }}
            buttonColor="rgba(231,76,60,1)"
          />
        </View>
      </>
    );
  }
}
