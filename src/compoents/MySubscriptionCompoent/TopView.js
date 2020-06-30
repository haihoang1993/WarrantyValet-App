import React from 'react';
import {Text, View, TextInput, StyleSheet, FlatList} from 'react-native';
import {Button} from 'react-native-elements';

const data = [
  {
    name: 'Status',
    value: 'Active',
  },
  {
    name: 'Start date',
    value: 'April 3, 2020',
  },
  {
    name: 'Last order date',
    value: 'June 3, 2020',
  },
  {
    name: 'Next payment date',
    value: 'July 31, 2020',
  },
  {
    name: 'Payment',
    value: 'Via Manual Renewal',
  },
];

export default (props) => {
  const renderItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.viewRow,
          index == data.length - 1 ? styles.viewBorderBottom : styles.viewRow,
        ]}>
        <View style={styles.viewTextLeft}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={styles.viewTextRigth}>
          <Text style={styles.text}>{item.value}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{}}>
      <FlatList data={data} renderItem={renderItem} />
      <Text style={{marginVertical: 10, fontSize: 18}}> Actions: </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.textButton}
          title="Cancel"
        />
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.textButton}
          title="Change Payment"
        />
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.textButton}
          title="Renew"
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
    flex: 0.4,
    borderRightColor: '#000',
    borderRightWidth: 0.5,
  },
  viewTextRigth: {
    padding: 10,
    flex: 0.6,
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
