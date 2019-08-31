import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.white,
        height: metrics.tabBarHeight,
        flexDirection: 'row',
        borderTopColor: colors.lighter,
        borderTopWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    icon: {
        color: colors.light,
    },

    active: {
        color: colors.primary,
    },

    mainIcon: {
        color: colors.white,
    },

    main: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
