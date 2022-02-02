import React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { colors } from '../../utils/colors';
import styles from './Loader.styles';

export default function Loader(props) {
  const { openLoader } = props;
  return (
    <ActivityIndicator
      animating={openLoader}
      color={colors.BLACKDARKMODE}
      size={50}
      style={styles.loader}
    />
  );
}
