import React from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';
import {AppBarDraw, MySubscriptionView} from '@compoents';
export default (props) => {
  return (
    <>
      <AppBarDraw title=" MySubscription" {...props} />
      <View style={{flex: 1}}>
        <View>
          <MySubscriptionView.TopView />
          <MySubscriptionView.SubscriptionTotalsView />
          <MySubscriptionView.BillingAddressView />
        </View>
      </View>
    </>
  );
};
