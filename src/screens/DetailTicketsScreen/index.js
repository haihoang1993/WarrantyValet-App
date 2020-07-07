/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import BaseScreen from '../BaseScreen';
import {DetailTicket} from '@compoents';

function DetailTicketsScreen (props){
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 5,
            paddingHorizontal:10
          }}>
          <DetailTicket {...props}>
          </DetailTicket>
        </View>
      </SafeAreaView>
    );
}

export default DetailTicketsScreen;
