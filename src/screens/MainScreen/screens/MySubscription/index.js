import React from 'react';
import {Text, View,ScrollView} from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';
import {AppBarDraw, MySubscriptionView} from '@compoents';
export default (props) => {
  return (
    <>
      <AppBarDraw title="My Subscription" {...props} />
      <View style={{flex: 1}}>
        <ScrollView>
          <MySubscriptionView.TopView />
          <MySubscriptionView.SubscriptionTotalsView />
          <MySubscriptionView.BillingAddressView />
        </ScrollView>
      </View>
    </>
  );
};
