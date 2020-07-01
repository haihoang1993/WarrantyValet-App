import React from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';
import {ListProducts} from '@compoents';
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
        {this.renderAppBar('Products')}
        <View
          style={{
            flex: 1,
          }}>
          <ListProducts />
          <ActionButton
            onPress={() => {
              EventApp.EmitToScreen('AddProducts', {});
            }}
            buttonColor="rgba(231,76,60,1)"
          />
        </View>
      </>
    );
  }
}
