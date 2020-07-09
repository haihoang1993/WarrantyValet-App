import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { Button } from 'react-native-elements';
import { Utils } from '@common';

export default (props) => {
  const { title = '', numPhotos = 1, onChangeData = null, data = [] } = props;
  console.log('data picker:',data);
  const [listImages, setListImages] = useState(data);

  const pickImg = () => {
    const options = {
      maxWidth: 1000,
      maxHeight: 1000,
      quality: 0.9,
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response showImagePicker :', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        const { data, type, uri, name } = response;

        // listImages.push(response.uri);
        console.log('list images:', listImages);
        const obj = Utils.formatPhoto({ data, type, uri, name });
        if (numPhotos > 1) {
          listImages.push(obj);
          setListImages([...listImages, ...[]]);
          if (onChangeData)
            onChangeData(listImages.length > 0 ? listImages : undefined);
        }
        else {
          if (listImages.length > 0) {
            listImages.pop(1);
          }
          listImages.push(obj);
          setListImages([...listImages, ...[]]);
          if (onChangeData)
            onChangeData(listImages.length > 0 ? listImages : undefined);
        }

      }
    });
  };
  //<i class="fad fa-image"></i>
  const iconRemove = (index = -1) => {
    return (
      <TouchableOpacity
        style={{ position: 'absolute', right: 0, backgroundColor: '#fff' }}
        onPress={() => {
          listImages.pop(index);
          setListImages([...listImages]);
          if (onChangeData)
            onChangeData(listImages.length > 0 ? listImages : undefined);


        }}>
        <Icon size={35} name="trash-o" />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.wrap}>
      <View>
        <Text style={styles.textTile}>{title}</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
        {console.log('list render:', listImages)}

        <FlatList
          horizontal={true}
          data={listImages}
          renderItem={({ item, index }) => {
            console.log('item select:', item);
            const { uri, photo_url } = item;
            const renderView = (
              <View style={styles.viewImage}>
                <Image style={styles.image} source={{uri: (uri) ? uri : photo_url }} />
                {iconRemove(index)}
              </View>
            );
            return renderView;
          }}
        />
        <View
          style={[numPhotos > 0 ? styles.viewButtonLeft : styles.viewButton]}>
          <Button onPress={pickImg} title="Choose Photos" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTile: {
    fontSize: 18,
  },
  wrap: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  textInput: {
    height: 50,
    backgroundColor: '#e8e8ed',
    borderRadius: 10,
    borderColor: '#a2a2a3',
    borderWidth: 0.5,
  },
  inputContainer: {
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  image: {
    height: 130,
    width: 130,
  },
  viewImage: {
    height: 130,
    width: 130,
    marginRight: 5,
  },
  viewButton: {
    alignSelf: 'flex-end',
  },
  viewButtonLeft: {
    alignSelf: 'flex-start',
  },
});
