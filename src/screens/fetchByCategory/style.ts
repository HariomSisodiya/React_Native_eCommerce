import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';

export const FetchByCategoryStyle = () =>
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
      elevation: 3,
      gap: 10,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    productInfo: {
      padding: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.textThemeColor,
    },
    loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    shimmerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
  });
