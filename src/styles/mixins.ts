import {Dimensions, PixelRatio} from 'react-native';
const guidelineBaseWidth = 375;

const WINDOW_WIDTH = Dimensions.get('window').width;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();
