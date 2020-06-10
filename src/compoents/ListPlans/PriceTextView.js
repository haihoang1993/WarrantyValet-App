import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {PricingCard, Card} from 'react-native-elements';
import {Device, Images} from '@common';
import {Button} from 'react-native-elements';

export default (props) => {
  const {price = 5.55} = props;
  return (
    <View style={stylesPrice.viewWrap}>
      <Text style={stylesPrice.textSub}>$</Text>
      <Text style={stylesPrice.textPrice}>{price}</Text>
      <Text style={[stylesPrice.textSub, {alignSelf: 'flex-end'}]}>/month</Text>
    </View>
  );
};
const stylesPrice = StyleSheet.create({
  viewWrap: {
    flexDirection: 'row',
  },
  textPrice: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 45,
  },
  textSub: {
    color: '#fff',
    fontSize: 20,
  },
});