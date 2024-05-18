import { Theme } from '@react-navigation/native';

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#581C87',
    background: '#FAF5FF',
    card: '#F3E8FF',
    text: '#333333',
    border: '#7E22CE',
    notification: '#7E22CE',
  },
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#D8B4FE',
    background: '#1C1C1C',
    card: '#333333',
    text: '#FFFFFF',
    border: '#575454',
    notification: '#575454',
  },
};
