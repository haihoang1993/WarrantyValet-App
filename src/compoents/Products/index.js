import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';
import { EventApp } from '@helpers';
import { ScreensName } from '@screens';
import PropTypes from 'prop-types';

const ListProducts = (props) => {
  const { data } = props;
  console.log('ListProducts', data);
  const itemR = ({ item }) => {
    const { p_title, p_price_format, p_created_date } = item;
    return (
      <TouchableOpacity
        onPress={() => {
          EventApp.EmitToScreen(ScreensName.DetailProuctScreen, {});
        }}>
        <View style={{ flex: 1 }}>
          <Card containerStyle={styles.styleCard}>
            <View>
              <View style={styles.styleViewRow}>
                <Text style={styles.title}>{p_title}</Text>
              </View>
            </View>
            <View style={[styles.styleViewRow, { marginTop:10 }]}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.priceSub}> Price:</Text>
                <Text style={styles.price}> {p_price_format}</Text>
              </View>
              <Text> {p_created_date}</Text>
            </View>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList renderItem={itemR} data={data} />
    </View>
  );
};


ListProducts.PropTypes = {
  data: PropTypes.array,
};

const styles = StyleSheet.create({
  styleCard: {
    padding: 5,
    borderRadius: 10,
    justifyContent: 'space-around'
  },
  styleViewRow: { flexDirection: 'row', justifyContent: 'space-between' },
  title: {
    fontSize: 23,
    color: '#2564d9',
    fontWeight: '700',
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#12B387'
  },
  priceSub: {
    fontSize: 17,
  },
});

export default ListProducts;
