import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  textCenter: {
    justifyContent: 'center',
  },

  tableDark: { backgroundColor: colors.GREYDARKMODE },
  tableLight: { backgroundColor: colors.LIGHTGREY },
  textDark: {
    color: colors.WHITE,
  },
  textLight: { color: colors.BLACKDARKMODE },
  titleDark: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: '700',
  },
  titleLight: { color: colors.BLACKDARKMODE },
});
export default styles;
