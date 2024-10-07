import {StackActions} from '@react-navigation/native';
import {useEffect, useRef} from 'react';
import {Animated, Appearance, useColorScheme, View} from 'react-native';
import {getStorageItem, setStorageItem} from '../../utils/asyncstorage';
import {asyncstorageKey, themes} from '../../utils/constant/asyncstorageKey';
import {switchTheme} from '../../utils/constant/color';
import {SplashStyle} from './style';

const Splash = ({navigation}: any) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const styles = SplashStyle();

  const systemDefaultTheme: any = useColorScheme();

  const getStoredTheme = (theme: string) => {
    let formattedTheme = theme;
    if (theme === themes.system) {
      switch (systemDefaultTheme) {
        case 'light':
          formattedTheme = systemDefaultTheme;
          break;
        case 'dark':
          formattedTheme = systemDefaultTheme;
          break;
        default:
          formattedTheme = 'light';
          break;
      }
      return formattedTheme;
    }

    return formattedTheme;
  };

  const setAppTheme = async () => {
    try {
      const storedTheme = await getStorageItem(asyncstorageKey.theme);

      if (storedTheme) {
        const theme = getStoredTheme(storedTheme);
        switchTheme(theme);
      } else {
        await setStorageItem(asyncstorageKey.theme, themes.system);
        switchTheme(systemDefaultTheme);
      }
    } catch (error) {
      console.log('ERROR setAppTheme--> ', error);
    }
  };
  // const setDefaultTheme = async () => {
  //   await setStorageItem(asyncstorageKey.theme, themes.system);
  //   switchTheme(systemColor);
  // };

  useEffect(() => {
    // setDefaultTheme();
    setAppTheme();
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Main'));
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2023/09/18/22/07/ai-generated-8261525_1280.png',
        }}
        style={[styles.image, {transform: [{scale: scaleAnim}]}]}
      />
    </View>
  );
};

export default Splash;
