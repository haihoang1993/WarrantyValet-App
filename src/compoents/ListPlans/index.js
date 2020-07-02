import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { Device, Images } from '@common';
import { Button } from 'react-native-elements';
import PriceTextView from './PriceTextView';
import ListContentPlan from './ListContentPlan';
import PropTypes from 'prop-types';
import { LoadingView } from '@compoents';

const ListPlansCompents = (props) => {
  const { listPlans } = props;
  const itemRender = ({ item }) => {
    const { name, price, description,featured=[],icon } = item;
    console.log('icon:',icon);
    const listContent=featured.map((e)=>{
      return e.featured_item;
    })

    return (
      <View style={{ width: (Device.getWithScreen() / 100) * 80 }}>
        <Card containerStyle={styles.card}>
          <View style={styles.header}>
            <Image style={styles.iconPlan} resizeMode={'cover'} source={{uri:icon}} />
            <Text style={styles.textNamePlan}> {name} </Text>
            <PriceTextView price={price} />
            <Text style={styles.subPlan}> {description} </Text>
          </View>
          <ListContentPlan data={listContent} />
          <View style={{ padding: 5 }}>
            <Button
              buttonStyle={{ backgroundColor: '#ff023e', fontWeight: 'bold' }}
              large
              rightIcon={{ name: 'login' }}
              title="CHOOSE PLAN"
            />
          </View>
        </Card>
      </View>
    );
  };
  return (
    <View>
      {/* <LoadingView></LoadingView> */}
      <FlatList horizontal={true} data={listPlans} renderItem={itemRender} />
    </View>
  );
};

ListPlansCompents.PropTypes = {
  listPlans: PropTypes.array,
};

export default ListPlansCompents;

const styles = StyleSheet.create({
  card: {
    padding: 0,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#2f73f6',
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
  },
  textNamePlan: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  },
  iconPlan: {
    height: 40,
    width:40,
  },
  subPlan: {
    color: '#fff',
    fontWeight: '600',
    marginVertical: 5,
    fontSize: 15,
  },
});
