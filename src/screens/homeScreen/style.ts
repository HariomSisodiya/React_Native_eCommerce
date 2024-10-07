import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';

const homeScreentheme = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      // padding: 15,
      backgroundColor: colors.backgroundColor,
    },
    productItem: {
      width: '48%', // Dynamic width for each item
      marginBottom: 15, // Space below each card
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: colors.cardThemeColor,
      elevation: 15,
      shadowColor: '#000',
      gap: 10,
    },
    loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      // backgroundColor: 'gray',
    },
    productInfo: {
      padding: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.textThemeColor,
    },
    shimmerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
  });

export default homeScreentheme;
