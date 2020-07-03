/** @format */

import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height >= 812 || width >= 812);

const getSizeScreen = () => {
  return Dimensions.get('window');
};

const getWithScreen = () => {
  return width;
};

const getHeightScreen = () => {
  return height;
};
export default {
  isIphoneX,
  ToolbarHeight: isIphoneX ? 35 : 0,
  getSizeScreen,
  getHeightScreen,
  getWithScreen,
};
