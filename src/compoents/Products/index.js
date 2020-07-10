import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';
import { EventHelper } from '@helpers';
import { ScreensName } from '@screens';
import PropTypes from 'prop-types';
import { SwipeListView } from 'react-native-swipe-list-view';

const ListProducts = (props) => {

  const { data, removeItem } = props;

  const renderItem = ({ item, index }) => {
    const { p_title, p_price_format, p_created_date } = item;
    return (
      <TouchableOpacity
        onLongPress={
          () => {
            if (removeItem)
              removeItem(item, index)
          }
        }
        onPress={() => {
          EventHelper.EmitToScreen(ScreensName.DetailProuctScreen,item);
        }}>
        <View style={{ flex: 1, }}>
          <Card containerStyle={styles.styleCard}>
            <View>
              <View style={styles.styleViewRow}>
                <Text style={styles.title}>{p_title}</Text>
              </View>
            </View>
            <View style={[styles.styleViewRow, { marginTop: 10 }]}>
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

  const deleteRow = (rowMap, { item, index }) => {
    if (removeItem)
      removeItem(item, index)
  }

  return (
    <View style={{ flex: 1 }}>
      <SwipeListView
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.rowBack}>
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnRight]}
              onPress={() => deleteRow(rowMap, data)}
            >
              <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={0}
        rightOpenValue={-75}
        style={{ flex: 1 }} renderItem={renderItem} data={data} />
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
    fontSize: 18,
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
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    // backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    // backgroundColor: 'red',
    right: 0,
  },
});

export default ListProducts;
