import React from 'react';
import { Text, View } from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';
import { AppBarDraw, PaymentCompoent } from '@compoents';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default (props) => {
  const _onChange = () => {

  }
  return (
    <>
      <AppBarDraw title="Payment methods" {...props} />
      <View style={{ flex: 1 }}>

        <PaymentCompoent.ViewData />
        <View style={{ marginTop: 40 }}>
          <CreditCardInput onChange={_onChange} />
        </View>
      </View>
    </>
  );
};
