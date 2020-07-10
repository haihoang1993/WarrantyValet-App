import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import { ListTickets, LoadingView, AppBarDraw } from '@compoents';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { EventHelper, StorageDB, ApiHepler } from '@helpers';
import { TicketsReduxAll } from '@redux';
import { connect } from 'react-redux';

const Type_Load = {
  LOADING: 1,
  LOAD_MORE: 2,
  LOAD_REFFES: 3,
}


const TicketsScreen = (props) => {
  const { listTickets,setList } = props;
  console.log('TicketsScreen props:',props)
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
      const res = await ApiHepler.GetTickets(user.token);
      console.log('TicketsScreen:', res);
      const { data: { tickets } } = res;
      if(setList)
        setList(tickets);
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
    EventHelper.OnToCreateTicket((dataNew) => {
      // console.log('EmitCreateTicket:',dataNew);
      // data.unshift(dataNew);
      console.log('OnToCreateTicket:', data);
      // setData([...[dataNew],...data]);
    })
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
          {(!isLoaing) && (<ListTickets data={listTickets} />)}
        </ScrollView>
        {(isLoaing) && (<LoadingView />)}
        <ActionButton
          onPress={() => {
            EventHelper.EmitToScreen('AddTicketsScreen', {});
          }}
          buttonColor="rgba(231,76,60,1)"
        />
      </View>
    </>
  );
}


const TicketsContainer = connect(
  (state) => {
    return {
      listProucts: state.ProductsReducer,
      listTickets: state.TicketReducer.list,
      page: state.TicketReducer.page,
    };
  },
  (dispatch) => {
    return {
      setList: (list) => {
        dispatch(TicketsReduxAll.ActionsTicket.setListTicket(list))
      }
    }
  },
)(TicketsScreen);

export default TicketsContainer;
