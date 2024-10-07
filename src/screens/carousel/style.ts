import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export const CarouselStyle = () =>
  StyleSheet.create({
    itemContainer: {
      width: width - 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '98%',
      height: 250,
      borderRadius: 10,
      resizeMode: 'stretch',
    },
    dotManage: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
  });
