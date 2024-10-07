import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';
export const SettingStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: colors.backgroundColor,
    },
    heading: {
      fontSize: 24,
      marginBottom: 20,
      fontWeight: 'bold',
      color: colors.textThemeColor,
    },
    card: {
      width: '100%',
      padding: 20,
      backgroundColor: colors.cardThemeColor,
      borderRadius: 10,
      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
  });
