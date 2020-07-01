import React from 'react';
import {Text, View, TextInput, StyleSheet, FlatList} from 'react-native';
import {Button} from 'react-native-elements';

const data = [
  {
    name: 'Method',
    value: 'Expires',
  },
  {
    name: 'Visa ending in 4242',
    value: '12/21',
  },
];

export default (props) => {
  const renderItem = ({item, index}) => {
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
            {item.value}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{marginTop: 15}}>
      <FlatList data={data} renderItem={renderItem} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          margin: 10,
        }}>
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.textButton}
          title="Add payment method"
        />
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
    flex: 0.6,
    borderRightColor: '#000',
    borderRightWidth: 0.5,
  },
  viewTextRigth: {
    padding: 10,
    flex: 0.4,
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
