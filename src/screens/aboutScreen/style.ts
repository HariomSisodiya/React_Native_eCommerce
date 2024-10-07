import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';

export const AboutScreenStyle = () =>
  StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
    },
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      backgroundColor: colors.backgroundColor,
    },
    about: {
      fontSize: 28,
      color: colors.textThemeColor,
      fontWeight: '600',
      textDecorationLine: 'underline',
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 300,
      borderRadius: 20,
      marginBottom: 20,
    },
    description: {
      fontSize: 18,
      color: colors.textThemeColor,
      textAlign: 'justify',
      fontWeight: '500',
      lineHeight: 28,
      marginBottom: 20,
    },
    expandedDescription: {
      height: 'auto',
    },
    button: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 25,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
  });
