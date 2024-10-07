import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';

export const ButtonWithImageAndRadioStyle = () =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderRadius: 8,
      marginVertical: 10,
      backgroundColor: colors.themeButton,
      justifyContent: 'space-between',
    },
    activeButton: {
      backgroundColor: colors.tabActiveColor, // Change background color for active button
    },
    label: {
      marginLeft: 10,
      fontSize: 20,
      color: colors.textThemeColor,
    },
    lightIcon: {
      flexDirection: 'row',
    },
  });
