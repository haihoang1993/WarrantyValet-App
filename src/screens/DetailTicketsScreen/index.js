/* eslint-disable react-native/no-inline-styles */
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { View, Modal, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { DetailTicket, IconBackHeader, BaseView } from '@compoents';
import { ApiHepler } from '@helpers';
import { Button } from 'react-native-elements';
import { Utils } from '@common';

function DetailTicketsScreen(props) {
  // const { navigation } = props;
  const { navigation, route: { params: ticket } } = props;
  const [listReply, setListReplys] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [datFrorm, setDataForm] = useState({ t_id: ticket.p_id });

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
      const { data: { reply } } = res;
      setListReplys(reply);
      console.log('getdat reply', res);
    } catch (error) {

    }
  }

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
        }}
      >

        <View style={styles.modalContainer}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ width: '100%' }}>
                <BaseView.TextInputView onChangeText={(text) => {
                  setDataForm({ ...datFrorm, ...{ tr_content: text } })
                }} multiline={true} />
              </View>
              <BaseView.PickerImage onChangeData={(data) => {
                    console.log('image:',data)
              }} numPhotos={2} title="Photos" />
              <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ flex: 0.5, marginRight: 3 }}>
                  <Button onPress={() => {
                    console.log('reply:', datFrorm);
                  }} title="Reply" />
                </View>
                <View style={{ flex: 0.5, marginRight: 3 }}>
                  <Button onPress={() => {
                    setModalVisible(!modalVisible);
                  }} title="Cancel" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View style={{ flex: 1 }}>
          {renderModal()}
          <ScrollView>
            <DetailTicket listReply={listReply} ticket={ticket} />
          </ScrollView>
          <View style={styles.viewReply}>
            <View style={styles.textReply}>
              <TouchableOpacity onPress={() => {
                setModalVisible(!modalVisible);
              }}>
                <Text style={{ fontSize: 23, color: '#8a8a8a', paddingHorizontal: 5 }}>Leave a Reply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default DetailTicketsScreen;


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 22,
    flexDirection: 'row'
  },
  viewReply: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 50
  },
  textReply: {
    backgroundColor: 'white',
    flex: 1,
    margin: 5,
    borderRadius: 20,
    justifyContent: 'center'
  },

  modalContainer: {
    flex: 1,
    //backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})