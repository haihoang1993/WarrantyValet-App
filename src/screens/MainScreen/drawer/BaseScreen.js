import React from 'react';
import {Appbar} from 'react-native-paper';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    // console.log('props:', props);
  }
  renderAppBar(title = '') {
    return (
      <Appbar.Header>
        {/* <Appbar.Action
          icon="view-sequential"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        /> */}
        <Appbar.Content title={title} />
        {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} /> */}
        {/* <Appbar.Action icon="dots-vertical" onPress={this._handleMore} /> */}
      </Appbar.Header>
    );
  }
}
