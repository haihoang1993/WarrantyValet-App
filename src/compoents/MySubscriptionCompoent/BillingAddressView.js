import React from 'react';
import {Text, View, TextInput, StyleSheet, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    name: 'Product',
    value: 'Total',
  },
  {
    name: 'Home Plan',
    value: '1.99',
  },
  {
    name: 'Last order date',
    value: '1.99',
  },
];

export default (props) => {
  return (
    <View style={{marginTop: 15}}>
      <Text
        style={{
          marginHorizontal: 10,
          fontSize: 25,
          fontWeight: '500',
        }}>
        Billing address
      </Text>
      <View
        style={{marginHorizontal: 10, borderColor: '#000', borderWidth: 0.4}}>
        <Text style={{fontWeight: 'bold', fontSize: 17}}>
          Cong Nguyen {'\n'}
          54 Hereford Avenue {'\n'}
          South Australia South Australia 5259 {'\n'}
          Australia
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Icon name="phone" />
          <Text>(08) 8287 4401</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="envelope" />
          <Text>Test@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#000',
    borderTopWidth: 0.5,
  },
  viewTextLeft: {
    padding: 10,
    flex: 0.4,
    borderRightColor: '#000',
    borderRightWidth: 0.5,
  },
  viewTextRigth: {
    padding: 10,
    flex: 0.6,
    flexDirection: 'row',
  },
  text: {
    fontSize: 17,
  },
  viewBorderBottom: {
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
  textButton: {color: 'black', fontWeight: 'bold'},
  button: {
    backgroundColor: '#d1d1d1',
  },
});
