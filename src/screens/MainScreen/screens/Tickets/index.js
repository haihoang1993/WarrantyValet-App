import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import { ListTickets, LoadingView, AppBarDraw } from '@compoents';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { EventApp, StorageDB, ApiApp } from '@helpers';

const Type_Load = {
  LOADING: 1,
  LOAD_MORE: 2,
  LOAD_REFFES: 3,
}


export default TicketsScreen = (props) => {

  const [isLoaing, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [data, setData] = useState([]);

  const getData = async (type = Type_Load.LOADING) => {

    if (type == Type_Load.LOADING)
      setLoading(true);
    else if (type == Type_Load.LOAD_REFFES)
      setRefreshing(true);
    const user = await StorageDB.getUserLogin();

    try {
      const res = await ApiApp.GetTickets(user.token);
      console.log('TicketsScreen:', res);
      const { data: { tickets } } = res;
      setData(tickets);

    } catch (error) {

      console.log('error product:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  const onRefresh = () => {
    getData(Type_Load.LOAD_REFFES);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AppBarDraw title="Tickets" {...props} />
      <View
        style={{
          flex: 1,
        }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor="white"
            />
          }>
          {(!isLoaing) && (<ListTickets data={data} />)}
        </ScrollView>
        {(isLoaing) && (<LoadingView />)}
        <ActionButton
          onPress={() => {
            EventApp.EmitToScreen('AddTicketsScreen', {});
          }}
          buttonColor="rgba(231,76,60,1)"
        />
      </View>
    </>
  );
}
