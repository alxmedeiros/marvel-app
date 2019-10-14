import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from "../../themes";
// import PropTypes from 'prop-types';
// import {Colors} from "../../themes";

class Footer extends Component {

    state = {
        totalPages : Math.floor(this.props.total / 4)
    };

    _goToPage = (page) => {

        const { currentPage, requestCharacters, onChangePage } = this.props;

        if ( page >= 1 && page <= this.state.totalPages && currentPage !== page ) {

            let nextOffset = (page - 1)*4;

            console.log('_goToPage', currentPage, page, nextOffset, {offset: nextOffset, limit: 4} );

            requestCharacters({offset: nextOffset, limit: 4});
            onChangePage(page);

        }

    };

    _mountPagination = () => {

        const { currentPage } = this.props;

        let page = 1;

        if ( (currentPage - 1) !== 0 ) {
            page = currentPage - 1;
        }

        let pages = [];

        for(let i = 1; i <= 3; i++) {

            let p = page++;

            pages.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => this._goToPage(p)}
                    style={{
                        width: 30,
                        height: 30,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: 'gray',
                        borderRadius: 100}}>
                    <Text>{p}</Text>
                </TouchableOpacity>
            );
        }

        return pages;

    };

    render () {

        const { currentPage } = this.props;

        console.log( 'Footer :: render', this.props.currentPage );

        return (
            <View style={{flexDirection: 'row', paddingTop: 18, marginBottom: 24, borderTopWidth: 1, borderTopColor: Colors.red}}>
                <TouchableOpacity
                    style={{width: 30, height: 30, marginLeft: 30}}
                    onPress={() => this._goToPage(currentPage-1)}>
                    <Icon name="caret-left" size={30} color={currentPage===1?'gray':'#D42026'} />
                </TouchableOpacity>

                <View style={{flex: 1, flexDirection: 'row', marginLeft: 60, marginRight: 60, justifyContent: 'space-between'}}>
                    {this._mountPagination()}
                </View>

                <TouchableOpacity
                    style={{width: 30, height: 30, marginRight: 30}}
                    onPress={() => this._goToPage(currentPage+1)}>
                    <Icon name="caret-right" size={30} color={currentPage===this.state.totalPages?'gray':'#D42026'} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default Footer;