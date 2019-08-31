import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.lighter,
        padding: metrics.padding,
        flexDirection: 'row'
    },

    avatar: {
        width: 68,
        height: 68,
        borderRadius: 34,
        marginRight: metrics.padding,
    },

    profileInfo: {
        flex: 1,
    },

    name: {
        fontWeight: 'bold',
        fontSize: fonts.big,
        color: colors.darker,
        marginTop: 5,
    },

    bio: {
        fontSize: fonts.regular,
        color: colors.regular,
        marginTop: 5,
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },

    firstButton: {
        marginRight: 10,
    },
});

export default styles;
