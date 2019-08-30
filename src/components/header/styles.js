import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingTop: metrics.headerPadding,
        height: metrics.headerHeight,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: metrics.padding,
        borderBottomWidth: 1,
        borderBottomColor: colors.lighter,
    },

    icon: {
        color: colors.primary,
    },

    title: {
        fontSize: fonts.big,
    }
});

export default styles;
