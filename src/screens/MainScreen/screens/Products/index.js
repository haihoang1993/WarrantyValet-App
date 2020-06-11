import React from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../../drawer/BaseScreen';

export default class ProductsScreen extends BaseScreen {
  constructor(props) {
    super(props);
    console.log('props:', props);
  }
  render() {
    return (
      <>
        {this.renderAppBar('Products')}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </>
    );
  }
}
