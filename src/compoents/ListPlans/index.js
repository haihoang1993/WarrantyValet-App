import React from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import {PricingCard, Card} from 'react-native-elements';
import {Device} from '@common';

export default (props) => {
  console.log('props:', props);
  const itemRender = ({item}) => {
    return (
      <View style={{width: (Device.getWithScreen() / 100) * 80}}>
        <PricingCard
          color="#4f9deb"
          title="Free"
          price="$0"
          info={[
            '1 User',
            'Basic Support',
            'All Core Features',
            'Basic Support',
            'All Core Features',
            'Basic Support',
            'All Core Features',
            'Basic Support',
            'All Core Features',
          ]}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
        />
        {/* <Card containerStyle={styles.card}>
          <View style={styles.header}>
            <Text> Free Plan </Text>
            <Text> Free Plan </Text>
          </View>
        </Card> */}
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
  },
  header: {alignItems: 'center', backgroundColor: '#2f73f6'},
});
