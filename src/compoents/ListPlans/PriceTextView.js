import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default (props) => {
  const {price = 5.55} = props;
  return (
    <View style={stylesPrice.viewWrap}>
      <Text style={stylesPrice.textSub}>$</Text>
      <View style={{margin:0,padding:0,height:'auto'}}><Text style={stylesPrice.textPrice}>{price}</Text></View> 
      <Text style={[stylesPrice.textSub, {alignSelf: 'flex-end',marginBottom:5}]}>/month</Text>
    </View>
  );
};
const stylesPrice = StyleSheet.create({
  viewWrap: {
    flexDirection: 'row',
    padding:0,
  },
  textPrice: {
    color: '#fff',
    fontSize: 40,
    fontWeight:"bold",
    margin:0,
  },
  textSub: {
    marginTop:5,
    color: '#fff',
    fontSize: 20,
  },
});
