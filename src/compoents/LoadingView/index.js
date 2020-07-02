import PropTypes from 'prop-types';
import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loading = props => {
    const {containerStyle, style, size, color} = props;

    return (
        <View style={[containerStyle, style]}>
            <ActivityIndicator animating size={size} color={color} />
        </View>
    );
};

Loading.defaultProps = {
    size: 36,
    color: '#3252a8',
    containerStyle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#25273C',
    },
    style: null,
};

Loading.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    style: PropTypes.object,
    containerStyle: PropTypes.object,
};

export default Loading;
