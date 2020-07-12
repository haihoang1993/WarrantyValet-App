import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, } from 'react-native';

import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { ScreensName } from '@screens';
import { Device, Images, TimeHelper } from '@common';
import ViewTab from './ViewTab';
const FirtScreen = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 0.2,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Image
            style={{
              width: 350,
            }}
            resizeMode="contain"
            source={Images.LogoApp}
          />
        </View>
        <View style={{ flex: 0.8 }}>
          <ViewTab {...props}> </ViewTab>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default FirtScreen;
