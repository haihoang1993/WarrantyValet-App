import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
export default (props) => {
  const {data}=props;
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemList}>
              <Text style={{ fontSize: 16,fontWeight:'900' }}>{item}</Text>
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
    borderBottomWidth: 0.5,
    marginHorizontal: 15,
    marginVertical: 10,
  },
});
