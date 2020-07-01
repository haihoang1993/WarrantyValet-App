import React from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';
import {AppBarDraw, PaymentCompoent} from '@compoents';
export default (props) => {
  return (
    <>
      <AppBarDraw title="Payment methods" {...props} />
      <View style={{flex: 1}}>
        <View>
          <PaymentCompoent.ViewData />
        </View>
      </View>
    </>
  );
};
