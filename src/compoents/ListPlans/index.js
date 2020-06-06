import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {PricingCard, Card} from 'react-native-elements';
import {Device, Images} from '@common';
import {Button} from 'react-native-elements';
import PriceTextView from './PriceTextView';

export default (props) => {
  const itemRender = ({item}) => {
    return (
      <View style={{width: (Device.getWithScreen() / 100) * 80}}>
        <Card containerStyle={styles.card}>
          <View style={styles.header}>
            <Image style={{height: 50}} source={Images.IconPlanFree} />
            <Text style={styles.textNamePlan}> Free Plan </Text>
            <PriceTextView />
          </View>
          <View>
            <FlatList
              data={[1, 2, 4, 5, 1, 2, 4, 5]}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      borderBottomColor: '#d4d4d4',
                      borderBottomWidth: 1,
                      marginHorizontal: 15,
                      marginVertical: 5,
                    }}>
                    <Text style={{fontSize: 23}}>hhh</Text>
                  </View>
                );
              }}
            />
          </View>
          <View style={{padding: 5}}>
            <Button
              buttonStyle={{backgroundColor: '#ff023e', fontWeight: 'bold'}}
              large
              rightIcon={{name: 'login'}}
              title="Login"
            />
          </View>
        </Card>
      </View>
    );
  };
  return (
    <View>
      <FlatList horizontal={true} data={[1, 2, 3]} renderItem={itemRender} />
    </View>
  );
};

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
});
