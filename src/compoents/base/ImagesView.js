import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ImagePlaceholder from 'react-native-image-with-placeholder'
import ImageModal from 'react-native-image-modal';

export default (props) => {
  const { title = '', numPhotos = 1, onChangeData = null, data = [] } = props;
  const [soucre, setSoucre] = useState(null);
  const [listImages, setListImages] = useState(data);

  //<i class="fad fa-image"></i>

  const imageModal = (item) => {
    const { photo_url: uri } = item;
    return (
      <ImageModal
        isTranslucent={Platform.OS === 'android' ? true : false}
        resizeMode="contain"
        imageBackgroundColor="#000000"
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
    )
  }

  return (
    <View style={styles.wrap}>
      <View>
        <Text style={styles.textTile}>{title}</Text>
      </View>
      <View style={{ flexDirection: numPhotos > 1 ? 'column' : 'row' }}>
        <FlatList
          horizontal={true}
          data={listImages}
          renderItem={({ item, index }) => {
            console.log('item select:', item);
            const { photo_url: uri } = item;
            const renderView = (
              <View style={styles.viewImage}>
                {imageModal(item)}
                {/* <Image style={styles.image} source={{ uri: uri }} /> */}
              </View>
            );
            return renderView;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTile: {
    fontSize: 20,
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
