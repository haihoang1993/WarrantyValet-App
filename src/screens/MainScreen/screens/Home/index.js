import React from 'react';
import {Text, View} from 'react-native';
import {Appbar} from 'react-native-paper';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <>
        {this.renderAppBar()}
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home Screen 1</Text>
        </View>
      </>
    );
  }
  renderAppBar() {
    return (
      <Appbar.Header>
        <Appbar.Action
          icon="view-sequential"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <Appbar.Content title="Title" />
        {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} /> */}
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
      </Appbar.Header>
    );
  }
}

// export default function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
