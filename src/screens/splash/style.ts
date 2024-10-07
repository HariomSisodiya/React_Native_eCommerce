import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';

export const SplashStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    image: {
      width: 250,
      height: 300,
    },
  });
