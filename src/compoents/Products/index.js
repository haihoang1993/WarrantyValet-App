import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {Device, Images} from '@common';
import {Button} from 'react-native-elements';
import {useTheme} from 'react-native-paper';

const ListProducts = (props) => {
  const itemR = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Card containerStyle={styles.styleCard}>
          <View>
            <View style={styles.styleViewRow}>
              <Text style={styles.title}> title</Text>
            </View>
          </View>
          <View style={styles.styleViewRow}>
            <Text style={styles.price}> Price:</Text>
            <Text> Created Date:</Text>
          </View>
        </Card>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList renderItem={itemR} data={[1, 2, 4]} />
    </View>
  );
};

const styles = StyleSheet.create({
  styleCard: {
    padding: 5,
    borderRadius: 10,
  },
  styleViewRow: {flexDirection: 'row', justifyContent: 'space-between'},
  title: {
    fontSize: 25,
    color: '#2564d9',
    fontWeight: '500',
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default ListProducts;
