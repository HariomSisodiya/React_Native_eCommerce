import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';

export const wishListStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: colors.backgroundColor,
    },
    productItem: {
      width: '48%',
      marginBottom: 15,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: colors.cardThemeColor,
      elevation: 3,
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
    shimmerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
  });
