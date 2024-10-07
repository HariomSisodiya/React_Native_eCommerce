import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';

export const drawerStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      // backgroundColor: colors.backgroundColor,
    },
    link: {
      fontSize: 18,
      marginVertical: 10,
      color: colors.tabActiveColor,
    },
    menu: {
      fontSize: 23,
      color: colors.textThemeColor,
      fontWeight: 'bold',
      marginTop: 20,
      marginLeft: 15,
    },
  });
