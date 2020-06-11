import React from 'react';
import {Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';

export default (props) => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Title" />
    </Appbar.Header>
  );
};
