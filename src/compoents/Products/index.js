import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements';

const ListProducts = (props) => {
  const itemR = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Card containerStyle={styles.styleCard}>
          <View>
            <View style={styles.styleViewRow}>
              <Text style={styles.title}> New Product Title</Text>
            </View>
          </View>
          <View style={styles.styleViewRow}>
            <Text style={styles.price}> Price: $0.00</Text>
            <Text> May 12, 2020 </Text>
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
    fontSize: 23,
    color: '#2564d9',
    fontWeight: '500',
  },
  price: {
    fontSize: 17,
    fontWeight: '700',
  },
});

export default ListProducts;
