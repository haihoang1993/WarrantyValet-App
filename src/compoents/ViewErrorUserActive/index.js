import React from 'react';
import { Text, View, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


export default (props) => {
  return (
    <View style={{ marginTop: 0 }}>
      <View style={{ backgroundColor: '#f44336', marginBottom: 5, padding: 5 }}><Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Please go to the mailbox verify your email address and complete the registration process!</Text></View>
      <View style={{ padding: 10, alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 16 }}>If you don't receive emai</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: '#2f73f6', fontWeight: 'bold' }}> Click here to resend verify email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
