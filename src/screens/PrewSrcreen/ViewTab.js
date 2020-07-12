import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { LoginForm } from '@compoents'
import SignUpScreen from '../SignUpScreen'

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample(props) {

  const LoginRoute = () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginVertical: 100,
        paddingHorizontal: 20
      }}>
      <LoginForm {...props}></LoginForm>
    </View>
  );

  const RegisterRoute = () => (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      marginVertical: 50,
      paddingHorizontal: 20
    }}>
      <SignUpScreen {...props}></SignUpScreen>
    </View>
  );
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'login', title: 'Login' },
    { key: 'sigup', title: 'Register' },
  ]);

  const renderScene = SceneMap({
    login: LoginRoute,
    sigup: RegisterRoute,
  });
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#2f73f6' }}
      style={{ backgroundColor: '#dedede' }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: '#000', margin: 1, }}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});