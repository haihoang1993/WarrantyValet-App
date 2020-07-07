import React from 'react';
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

export default function DrawerContent(props) {
  const { listScreens = [], navigation } = props;
  console.log('DrawerContent', props);
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
        { text: "OK", onPress: () => EventHelper.EmitToScreen('logout',{}) }
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
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          />
          <Title style={styles.title}>Dawid Urbaniak</Title>
          <Caption style={styles.caption}>@trensik</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                Home Plan
              </Paragraph>
              <Caption style={styles.caption} />
            </View>
            <View style={styles.section} d dddd>
              <Button title="Account details" />
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

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
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
