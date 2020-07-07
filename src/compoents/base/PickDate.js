import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default (props) => {
  const {title = '', multiline = false} = props;
  const [value, setValue] = useState('mm/dd/yyyy');
  const [isShowPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');

  const onChange = (event, selectedDate) => {
    // const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    // setDate(currentDate);
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.textTile}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          setShowPicker(!isShowPicker);
        }}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.textInput}> {value} </Text>
          </View>
          <View>
            <Icon
              style={{
                fontSize: 18,
              }}
              name="calendar"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isShowPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
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
  },
  textInputMutiline: {
    minHeight: 100,
  },
  inputContainer: {
    backgroundColor: '#e8e8ed',
    borderRadius: 10,
    borderColor: '#a2a2a3',
    borderWidth: 0.5,
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
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
