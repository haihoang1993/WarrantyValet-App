import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function IconHeader(props) {
    const { onBackPress, navigation } = props;

    const onBack = () => {
        if (onBackPress) {
            onBackPress();
        }
        navigation.pop();
    };

    return (
        <TouchableOpacity style={styles.viewBack} onPress={onBack}>
            <Icon size={30} style={{ color: 'white', fontWeight: '800' }} name="angle-left" />
        </TouchableOpacity>
    );
}

export default IconHeader;

const styles = StyleSheet.create({
    viewBack: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: '100%',
    },
    imageBack: {
        width: 16,
        height: 20,
    },
});
