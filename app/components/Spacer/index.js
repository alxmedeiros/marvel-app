import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Spacer extends Component {

    render() {
        const { size } = this.props;

        let style = {
            height: size
        };

        return (
            <View style={style} />
        );
    }
}

Spacer.propTypes = {
    size: PropTypes.number
};

export default Spacer;
