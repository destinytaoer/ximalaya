import {Dimensions} from 'react-native';
export const {width: viewportWidth, height: viewportHeight} = Dimensions.get(
  'window',
);

export function wp(percent: number) {
  return (percent * viewportWidth) / 100;
}

export function hp(percent: number) {
  return (percent * viewportHeight) / 100;
}
