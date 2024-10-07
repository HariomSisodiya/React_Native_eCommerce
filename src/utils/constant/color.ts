import {themes} from './asyncstorageKey';

export const colors = {
  backgroundColor: '#E5E7EB',
  backgroundColorLight: '#E5E7EB',
  backgroundColorDark: '#1F2937',
  textThemeColor: '#333',
  textThemeColorLight: '#333',
  textThemeColorDark: '#fff',
  cardThemeColor: '#fff',
  cardThemeColorLight: '#fff',
  cardThemeColorDark: '#4B5563',
  tabActiveColor: '#007AFF',
  tabInactiveColor: '#000',
  themeButton: '#E5E7EB',
  themeButtonLight: '#E5E7EB',
  themeButtonDark: '#1F2937',
};

export const switchTheme = (theme: string = themes.light) => {
  switch (theme) {
    case themes.light:
      colors.backgroundColor = colors.backgroundColorLight;
      colors.textThemeColor = colors.textThemeColorLight;
      colors.cardThemeColor = colors.cardThemeColorLight;
      colors.themeButton = colors.themeButtonLight;
      break;

    case themes.dark:
      colors.backgroundColor = colors.backgroundColorDark;
      colors.textThemeColor = colors.textThemeColorDark;
      colors.cardThemeColor = colors.cardThemeColorDark;
      colors.themeButton = colors.themeButtonDark;
      break;

    default:
      colors.backgroundColor = colors.backgroundColor;
      colors.textThemeColor = colors.textThemeColor;
      colors.cardThemeColor = colors.cardThemeColor;
      colors.themeButton = colors.themeButton;
      break;
  }
};
