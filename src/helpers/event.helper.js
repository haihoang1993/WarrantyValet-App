import { EventRegister } from 'react-native-event-listeners';

const EmitToScreen = (nameScreen, data) => {
  EventRegister.emit('toScreen', { nameScreen: nameScreen, param: data });
};

const OnToScreen = (callback) => {
  EventRegister.addEventListener('toScreen', (data) => {
    const { nameScreen, param } = data;
    callback(nameScreen, param);
  });
};

const EmitCreateTicket = (data)=>{
  console.log('EmitCreateTicket',data)
  EventRegister.emit('createTicket',data);
}

const OnToCreateTicket = (callback)=>{
  EventRegister.addEventListener('createTicket', (data) => {
      callback(data)
  });
}

export { EmitToScreen, OnToScreen, EmitCreateTicket, OnToCreateTicket };
