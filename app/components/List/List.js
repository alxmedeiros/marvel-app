import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class List extends Component {
    _renderRow = (item) => {
        return (
            <ListItem
                id={item.id}
                data={item}
                onSelect={(item) => this.props.onSelect(item)}/>
        );
    };

    _keyExtractor = (item) => item.id;

    render () {
        const { data } = this.props;
        return (
            <FlatList
                style={{flex: 1}}
                data={data}
                renderItem={this._renderRow}
                keyExtractor={this._keyExtractor}
                extraData={data}
            />
        );
    }
}

List.propTypes = {
    data: PropTypes.array,
    onSelect: PropTypes.func
};

export default List;
