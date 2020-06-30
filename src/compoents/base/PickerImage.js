import React, {useState, useEffect} from 'react';
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
import {Button} from 'react-native-elements';

export default (props) => {
  const {title = '', numPhotos = 1} = props;
  const [soucre, setSoucre] = useState(null);
  const [listImages, setListImages] = useState([]);

  const pickImg = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
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
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        if (numPhotos === 1) {
          const sourceImport = {uri: response.uri};
          setSoucre(sourceImport);
        } else {
          // listImages.push(response.uri);
          console.log('list images:', listImages);
          setListImages([...listImages, ...[response.uri]]);
        }
      }
    });
  };
  //<i class="fad fa-image"></i>
  const iconRemove = (index = -1) => {
    return (
      <TouchableOpacity
        style={{position: 'absolute', right: 0}}
        onPress={() => {
          if (index !== -1) {
            listImages.pop(index);
            setListImages([...listImages]);
          } else {
            setSoucre(null);
          }
        }}>
        <Icon size={25} name="trash-o" />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.wrap}>
      <View>
        <Text style={styles.textTile}>{title}</Text>
      </View>
      <View style={{flexDirection: numPhotos > 1 ? 'column' : 'row'}}>
        {console.log('list render:', listImages)}
        {listImages.length > 0 && numPhotos > 1 && (
          <FlatList
            horizontal={true}
            data={listImages}
            renderItem={({item, index}) => {
              console.log('item select:', item);
              const renderView = (
                <View style={styles.viewImage}>
                  <Image style={styles.image} source={{uri: item}} />
                  {iconRemove(index)}
                </View>
              );
              return renderView;
            }}
          />
        )}
        {soucre != null && numPhotos === 1 && (
          <View style={styles.viewImage}>
            <Image style={styles.image} source={soucre} />
            {iconRemove()}
          </View>
        )}
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
