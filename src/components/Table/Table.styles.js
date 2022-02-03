import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  textCenter: {
    justifyContent: 'center',
  },

  tableDark: { backgroundColor: colors.GREYDARKMODE },
  tableLight: { backgroundColor: colors.LIGHTGREY },
  text: {
    fontSize: 12,
  },
  textDark: {
    color: colors.WHITE,
  },
  textLight: { color: colors.BLACKDARKMODE },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  titleDark: {
    color: colors.WHITE,
  },
  titleLight: { color: colors.BLACKDARKMODE },
});
export default styles;
