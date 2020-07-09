import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';

function Show(title,text,callback){
    Alert.alert(
        title,
        text,
        [
          { text: 'OK', onPress: () => {
              if(callback)
                callback()
              console.log('OK Pressed')
          }
        }
        ],
        { cancelable: false }
      );
}

export {
    Show
}