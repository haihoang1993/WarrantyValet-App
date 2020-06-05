/** @format */
import {DefaultTheme, DarkTheme} from 'react-native-paper';

const dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text: '#454545',
    primary: 'tomato',
    accent: 'yellow',
    lineColor: '#383A46',
    background: '#b9deb9', // '#242424' // '#232D4C'
    backgroundMenuBody: '#33cc66',
  },
};

const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#454545',
    primary: '#2f73f6',
    accent: 'yellow',
    lineColor: '#383A46',
    background: '#b9deb9', // '#242424' // '#232D4C'
    backgroundMenuBody: '#33cc66',
  },
};

export default {dark, light};
