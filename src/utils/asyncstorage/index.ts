// utils/asyncstorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncstorageKey} from '../constant/asyncstorageKey';

export const setStorageItem = async (key: string, value: any) => {
  try {
    let formattedData = value;
    if (typeof value !== 'string') {
      formattedData = JSON.stringify(formattedData);
    }
    await AsyncStorage.setItem(key, formattedData);
  } catch (error) {
    console.error('Error storing data', error);
  }
};

export const getStorageItem = async (key: string) => {
  try {
    let result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    console.log('Error in asyncstorage data fetching : ', error);
  }
};
