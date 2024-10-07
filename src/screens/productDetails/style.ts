import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constant/color';

export const ProductDetailsStyle = () =>
  StyleSheet.create({
    container: {
      // padding: 10,
      backgroundColor: colors.backgroundColor,
    },
    image: {
      width: '100%',
      height: 400,
      resizeMode: 'cover',
    },
    loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    productInfo: {
      padding: 15,
      height: 700,
      justifyContent: 'space-between',
    },
    brand: {
      color: colors.textThemeColor,
    },
    title: {
      fontSize: 23,
      fontWeight: '400',
      color: colors.textThemeColor,
    },
    price: {
      fontSize: 19,
      fontWeight: 'bold',
      color: 'green',
      elevation: 3,
    },
    discount: {
      color: '#f42424',
    },
    rating: {
      fontSize: 17,
      color: colors.textThemeColor,
    },
    ratingSection: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    stock: {
      color: colors.textThemeColor,
      fontSize: 17,
      fontWeight: 'bold',
    },
    heading: {
      fontSize: 25,
      marginTop: 10,
      color: colors.textThemeColor,
      fontWeight: 'bold',
    },
    description: {
      color: colors.textThemeColor,
      textAlign: 'justify',
      fontSize: 13,
      lineHeight: 18,
    },
    related: {
      marginTop: 15,
    },
    relatedHeading: {
      fontSize: 25,
      color: colors.textThemeColor,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 16,
    },
    heart: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
