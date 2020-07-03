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

  const itemR = ({ item }) => {
    const { title } = item;

    return (
      <TouchableOpacity
        onPress={() => {
          EventApp.EmitToScreen(ScreensName.DetailProuctScreen, {});
        }}>
        <View style={{ flex: 1 }}>
          <Card containerStyle={styles.styleCard}>
            <View>
              <View style={[styles.styleViewRow, { marginBottom: 5, alignItems: 'center' }]}>
                <Text style={styles.title}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.priceSub}> Status:</Text>
                  <Text style={{ color: '#ff1414', fontWeight: '600' }}>Open</Text>
                </View>
              </View>
            </View>
            <View style={styles.styleViewRow}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.priceSub}> Product:</Text>
                <Text style={styles.price}>Test</Text>
              </View>
              <Text> May 12, 2020 </Text>
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
    paddingHorizontal: 7,
    borderRadius: 10,
    paddingVertical: 5,
  },
  styleViewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 23,
    color: '#2564d9',
    fontWeight: '700',
  },
  price: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000'

  },
  priceSub: {
    fontSize: 14,
  },
});

export default ListProducts;
