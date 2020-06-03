import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {PricingCard} from 'react-native-elements';
import {Device} from '@common';

export default (props) => {
  console.log('props:', props);
  return (
    <View>
      <Button
        onPress={() => {
          props.onIncrement(1);
        }}
        title="+"
      />
      <Button
        onPress={() => {
          props.onDecrement(1);
        }}
        title="-"
      />
      <Text>Reuslt: {props.times}</Text>
    </View>
  );
};
