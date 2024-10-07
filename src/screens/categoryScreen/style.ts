import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';

export const categoryItemStyleScreen = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: colors.backgroundColor,
    },
    listContainer: {
      paddingBottom: 15,
    },
    loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryItem: {
      // padding: 15,
      width: '99%',
      height: 55,
      marginVertical: 8,
      marginHorizontal: 5,
      borderRadius: 10,
      backgroundColor: colors.cardThemeColor,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      justifyContent: 'center',
    },
    categoryName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.textThemeColor,
      marginLeft: 20,
    },
    categoryNameShimmer: {
      backgroundColor: 'rgba(0,0,0,0.1)', // Adjust opacity as needed
      width: '100%',
      height: 52,
      borderRadius: 5,
      marginVertical: 5, // Add some space for aesthetics
    },
  });
