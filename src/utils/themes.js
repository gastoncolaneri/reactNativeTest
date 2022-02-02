import { DefaultTheme } from '@react-navigation/native';
import { DefaultTheme as DefaultThemePaper } from 'react-native-paper';
import { colors } from './colors';

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.BLACKDARKMODE,
    background: colors.BLACKDARKMODE,
    card: colors.GREYDARKMODE,
    text: colors.WHITE,
  },
};

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.GREY,
    background: colors.GREY,
    card: colors.GREY,
    text: colors.DARKGREY,
  },
};

export const DarkThemePaper = {
  ...DefaultThemePaper,
  colors: {
    ...DefaultThemePaper.colors,
    primary: '#fff',
    background: '#FFFFFF',
    surface: colors.DARKGREY,
    text: '#fff',
  },
};

export const lightThemePaper = {
  ...DefaultThemePaper,
  colors: {
    ...DefaultThemePaper.colors,
    primary: colors.DARKGREY,
    text: colors.DARKGREY,
  },
};
