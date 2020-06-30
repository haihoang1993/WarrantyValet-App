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
      <Appbar.Content title={title} />
      {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} /> */}
      {/* <Appbar.Action icon="dots-vertical" onPress={this._handleMore} /> */}
    </Appbar.Header>
  );
};
