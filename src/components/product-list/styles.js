import { StyleSheet } from 'react-native';
import { metrics } from '../../styles';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: metrics.padding,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default styles;
