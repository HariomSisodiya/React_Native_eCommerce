import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {drawerStyle} from './style';

const DrawerScreen = ({navigation}: any) => {
  const styles = drawerStyle();
  const ActionButton = ({title = '', action = () => null}) => (
    <TouchableOpacity onPress={action}>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Text style={styles.menu}>MENU</Text>
      <View style={styles.container}>
        <ActionButton title="Home" action={() => navigation.navigate('Home')} />
        <ActionButton
          title="About"
          action={() => navigation.navigate('About')}
        />
        <ActionButton
          title="Wish List"
          action={() => navigation.navigate('WishList')}
        />
      </View>
    </>
  );
};

export default DrawerScreen;
