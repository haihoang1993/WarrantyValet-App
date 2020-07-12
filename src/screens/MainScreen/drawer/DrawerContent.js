import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
} from 'react-native-paper';
import { EventHelper } from '@helpers';
import { Button } from 'react-native-elements';
import { ScreensName } from '@screens';
import { StorageDB } from '@helpers';
import { connect } from 'react-redux';

function DrawerContent(props) {
  const { listScreens = [], navigation, userCurent: user } = props;
  const { is_activated } = user
  console.log('DrawerContent', props);
  // const [user, setUser] = useState(userCurent);

  useEffect(() => {
    // const getUser = async () => {
    //   const user = await StorageDB.getUserLogin();
    //   const { info } = user
    //   // console.log('user info:', userInfo);
    //   setUser(info);
    // }
    // getUser();
  }, [])
  const createAlertLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => EventHelper.EmitToScreen('logout', {}) }
      ],
      { cancelable: false }
    );
  }

  const renderListCotent = () => {
    return (
      <FlatList
        data={listScreens}
        renderItem={({ item }) => {
          return (
            <DrawerItem
              style={styles.itemMenu}
              label={item.label}
              onPress={() => {
                if (!is_activated) {
                  if (item.name == 'logout') {
                    createAlertLogout();
                  }
                  return;
                }
                if (item.name == 'logout') {
                  createAlertLogout();
                } else {

                  navigation.navigate(item.name);
                }
              }}
            />
          );
        }}
      />
    );
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfBzhsIthnvitXwnkj8dkdhBxop2IYp9cS1g&usqp=CAU',
            }}
            size={70}
          />
          {user && (<Title style={styles.title}>{user.display_name}</Title>)}
          {user && (<Caption style={styles.caption}>{user.email}</Caption>)}

          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
              </Paragraph>
              <Caption style={styles.caption} />
            </View>
            <View style={styles.section}>
              <Button onPress={() => {
                EventHelper.EmitToScreen(ScreensName.DetailUpdateUser, {})
              }} title="Account details" />
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          {renderListCotent()}
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}



const mapStateToProps = (state) => {
  return {
    userCurent: state.UserReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => {
      dispatch({ type: UserReduxAll.TypeActions.GET_USER, value: { test: 'test' } })
    }
  };
};


const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContent);

export default Container;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,

  },
  title: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    // flex:1
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  itemMenu: {
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 0.3,
  },
});
