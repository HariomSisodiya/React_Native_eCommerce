import {View, Text, useColorScheme, Appearance, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {asyncstorageKey, themes} from '../../utils/constant/asyncstorageKey';
import {getStorageItem, setStorageItem} from '../../utils/asyncstorage';
import {StackActions, useNavigation} from '@react-navigation/native';
import ButtonWithImageAndRadio from '../../components/customButtons';
import {SettingStyle} from './style';
import {switchTheme} from '../../utils/constant/color';

const SettingScreen = () => {
  const [activeButton, setActiveButton] = useState('');
  const styles = SettingStyle();
  const navigation = useNavigation();

  const getUserTheme = async () => {
    try {
      const userTheme = await getStorageItem(asyncstorageKey.theme);
      // console.log('userTheme--> ', userTheme);
      switch (userTheme) {
        case themes.light:
          setActiveButton(themes.light);
          break;
        case themes.dark:
          setActiveButton(themes.dark);

          break;
        case themes.system:
          setActiveButton(themes.system);
          break;

        default:
          break;
      }
    } catch (error) {
      console.log('Error getting user Theme --> ', error);
    }
  };

  const changeTheme = async (theme: string) => {
    if (activeButton === theme) {
      Alert.alert('Theme Applied', `${theme} theme apllied successfully`, [
        {text: 'OK'},
      ]);
      return;
    }
    try {
      // console.log('theme selected --> ', theme);

      setActiveButton(theme);
      await setStorageItem(asyncstorageKey.theme, theme);

      if (theme === 'system') {
        const systemTheme: any = Appearance.getColorScheme();
        switchTheme(systemTheme);
      } else {
        switchTheme(theme);
      }

      setTimeout(
        () => navigation.dispatch(StackActions.replace('Splash')),
        1000,
      );
    } catch (error) {}
  };

  useEffect(() => {
    getUserTheme();
  }, []);

  // console.log('active button --> ', activeButton);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.card}>
        <ButtonWithImageAndRadio
          title={'Light Theme'}
          icon="sunny-outline"
          value="light"
          onPress={(value: any) => changeTheme(value)}
          isActive={activeButton === themes.light}
        />
        <ButtonWithImageAndRadio
          title={'Dark Theme'}
          icon="moon-outline"
          value="dark"
          onPress={(value: any) => changeTheme(value)}
          isActive={activeButton === themes.dark}
        />
        <ButtonWithImageAndRadio
          title={'System Theme'}
          icon="laptop-outline"
          value="system"
          onPress={(value: any) => changeTheme(value)}
          isActive={activeButton === themes.system}
        />
      </View>
    </View>
  );
};

export default SettingScreen;
