import React, { PureComponent } from 'react';
import {Text, Animated, Platform, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
// import { Button } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors, Images} from '../../themes';
import PropTypes from 'prop-types';

const window = Dimensions.get('window');
const windowHeight = window.height - 265;

const listStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.red,
        height: (windowHeight / 4) - 1,
        padding: 18
    }
});

class ListItem extends PureComponent {
    constructor (props) {
        super(props);

        this._active = new Animated.Value(0);

    }

    _onPress = (item) => {
        this.props.onSelect(item.id);
    };

    render () {
        const {data} = this.props;

        return (
            <TouchableOpacity
                style={[
                    listStyles.row
                ]}
                onPress={() => this._onPress(data.item)}
            >
                <Image
                    source={{uri: `${data.item.thumbnail.path}.${data.item.thumbnail.extension}`}}
                    style={{width: 50, height: 50, marginRight: 20}}
                />
                <Text>{data.item.name}</Text>
            </TouchableOpacity>
        );
    }
}

ListItem.propTypes = {
    data: PropTypes.object,
    onSelect: PropTypes.func
};

export default ListItem;
