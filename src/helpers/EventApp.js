import {EventRegister} from 'react-native-event-listeners';

const EmitToScreen = (nameScreen, data) => {
  EventRegister.emit('toScreen', {nameScreen: nameScreen, param: data});
};

const OnToScreen = (callback) => {
  EventRegister.addEventListener('toScreen', (data) => {
    const {nameScreen, param} = data;
    callback(nameScreen, param);
  });
};

export {EmitToScreen, OnToScreen};
