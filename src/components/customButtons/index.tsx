import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import CheckIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../utils/constant/color';
import {ButtonWithImageAndRadioStyle} from './style';

const ButtonWithImageAndRadio = ({
  icon,
  value,
  title,
  onPress = () => {},
  isActive = false,
  type = 'imageRadio',
}: any) => {
  const styles = ButtonWithImageAndRadioStyle();
  return (
    <>
      {type === 'imageRadio' && (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => {
            onPress(value);
          }}>
          <View style={styles.lightIcon}>
            <Icons name={icon} color={colors.textThemeColor} size={24} />
            <Text style={styles.label}>{title}</Text>
          </View>
          <CheckIcon
            name={
              isActive
                ? 'checkbox-marked-circle'
                : 'checkbox-blank-circle-outline'
            }
            color={colors.tabActiveColor}
            size={24}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default ButtonWithImageAndRadio;
