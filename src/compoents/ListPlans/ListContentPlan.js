import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
export default (props) => {
  return (
    <View>
      <FlatList
        data={[1, 2, 4, 5, 1, 2, 4, 5]}
        renderItem={({item}) => {
          return (
            <View style={styles.itemList}>
              <Text style={{fontSize: 23}}>hhh</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    alignItems: 'center',
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5,
  },
});
