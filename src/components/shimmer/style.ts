import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';

export const shimmerScreenStyle = () =>
  StyleSheet.create({
    imageSkeleton: {
      width: '100%',
      height: 200,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 8,
    },
    titleSkeleton: {
      height: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 4,
      width: '100%',
    },
    productInfo: {
      padding: 10,
    },
    Item: {
      width: '48%', // Dynamic width for each item
      marginBottom: 15, // Space below each card
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: colors.cardThemeColor,
      elevation: 15,
      shadowColor: '#000',
      gap: 10,
    },
  });
