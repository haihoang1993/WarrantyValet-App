import React from 'react';
import {Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';

export default (props) => {
  const {title = ''} = props;
  return (
    <Appbar.Header>
      <Appbar.Action
        icon="view-sequential"
        onPress={() => {
          props.navigation.openDrawer();
        }}
      />
      <Appbar.Content titleStyle={{fontWeight:'600',fontSize:18}} title={title} />
      {/* <Appbar.Action icon="magnify" onPress={thi._handleSearch} /> */}
      {/* <Appbar.Action icon="dots-vertical" onPress={this._handleMore} /> */}
    </Appbar.Header>
  );
};
