import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default (props) => {
  const {title = '', multiline = false} = props;
  if (multiline) {
    return (
      <View style={styles.wrap}>
        <Text style={styles.textTile}>{title}</Text>
        <View styles={styles.inputMutilineContainer}>
          <TextInput
            {...props}
            style={[styles.textInput, styles.textInputMutiline]}
          />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.wrap}>
      <Text style={styles.textTile}>{title}</Text>
      <View styles={styles.inputContainer}>
        <TextInput {...props} style={styles.textInput} />
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
    marginBottom: 10,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: '#e8e8ed',
    borderRadius: 10,
    borderColor: '#a2a2a3',
    borderWidth: 0.5,
    minHeight: 45,
  },
  textInputMutiline: {
    minHeight: 100,
  },
  inputContainer: {
    borderBottomColor: '#3FF',
    backgroundColor: '#FFFF0F',
    borderRadius: 20,
    borderBottomWidth: 1,
    width: 500,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputMutilineContainer: {
    borderBottomColor: '#3FF',
    backgroundColor: '#FFFF0F',
    borderRadius: 20,
    borderBottomWidth: 1,
    width: 500,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
