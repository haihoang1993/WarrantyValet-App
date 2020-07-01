import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {Device, Images} from '@common';
import {Button} from 'react-native-elements';
import PriceTextView from './PriceTextView';
import ListContentPlan from './ListContentPlan';
import PropTypes from 'prop-types';

const ListPlansCompents = (props) => {
  const {listPlans} = props;
  const itemRender = ({item}) => {
    return (
      <View style={{width: (Device.getWithScreen() / 100) * 80}}>
        <Card containerStyle={styles.card}>
          <View style={styles.header}>
            <Image style={styles.iconPlan} source={Images.IconPlanFree} />
            <Text style={styles.textNamePlan}> Free Plan </Text>
            <PriceTextView />
            <Text style={styles.subPlan}> Crafted for a Great Start </Text>
          </View>
          <ListContentPlan />
          <View style={{padding: 5}}>
            <Button
              buttonStyle={{backgroundColor: '#ff023e', fontWeight: 'bold'}}
              large
              rightIcon={{name: 'login'}}
              title="CHOOSE PLAN"
            />
          </View>
        </Card>
      </View>
    );
  };
  return (
    <View>
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
    marginVertical: 10,
  },
  iconPlan: {
    height: 50,
  },
  subPlan: {
    color: '#fff',
    fontWeight: '600',
    marginVertical: 10,
    fontSize: 15,
  },
});
