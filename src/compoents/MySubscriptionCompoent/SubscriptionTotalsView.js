import React from 'react';
import {Text, View, TextInput, StyleSheet, FlatList} from 'react-native';
import {Button} from 'react-native-elements';

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
  const renderItem = ({item, index}) => {
    const stringValue = index != 0 ? '$' + item.value : item.value;
    const boldString =
      index == 0 || index == data.length - 1 ? {fontWeight: 'bold'} : {};
    const stylePrice = index != 0 ? {color: '#2f73f6', fontWeight: 'bold'} : {};
    return (
      <View
        style={[
          styles.viewRow,
          index == data.length - 1 ? styles.viewBorderBottom : styles.viewRow,
        ]}>
        <View style={styles.viewTextLeft}>
          <Text style={[styles.text, boldString]}>{item.name}</Text>
        </View>
        <View style={styles.viewTextRigth}>
          <Text style={[styles.text, boldString, stylePrice]}>
            {stringValue}
          </Text>
          {index != 0 && <Text style={[styles.text, boldString]}>/month</Text>}
        </View>
      </View>
    );
  };
  return (
    <View style={{marginTop: 15}}>
      <Text
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
          fontSize: 25,
          fontWeight: '600',
        }}>
        Subscription totals:
      </Text>
      <FlatList data={data} renderItem={renderItem} />
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
