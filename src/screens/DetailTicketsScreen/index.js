/* eslint-disable react-native/no-inline-styles */
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import BaseScreen from '../BaseScreen';
import { DetailTicket, IconBackHeader } from '@compoents';
import { ApiHepler } from '@helpers';

function DetailTicketsScreen(props) {
  // const { navigation } = props;
  const { navigation, route: { params: ticket } } = props;
  const [listReply, setListReplys] = useState([]);
  useLayoutEffect(() => {
    const title = 'Ticket';
    navigation.setOptions({
      title: title,
      headerLeft: () => <IconBackHeader {...props} />,
    });
  }, [navigation]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    console.log('getdat');
    try {
      const res = await ApiHepler.GetReplysTicket(ticket.p_id);
      const {data:{reply}}=res;
      setListReplys(reply);
      console.log('getdat reply', res);
    } catch (error) {

    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 5,
          paddingHorizontal: 10
        }}>
        <DetailTicket listReply={listReply} ticket={ticket} >
        </DetailTicket>
      </View>
    </SafeAreaView>
  );
}

export default DetailTicketsScreen;
