import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '500',
  },

  switcherBtn: {
    width: 140,
    alignSelf: 'center',
    margin: 15,
  },
  background: {
    flex: 1,
    padding: 20,
  },
  backgroundDark: { backgroundColor: colors.BLACKDARKMODE },
  backgroundLight: { backgroundColor: colors.WHITE },
  switcherDark: { backgroundColor: colors.GREYDARKMODE },
  switcherLight: { backgroundColor: colors.GREY },
  textDark: {
    color: colors.WHITE,
  },
  textLight: { color: colors.DARKGREY },
});
export default styles;
