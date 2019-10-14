import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Colors} from '../../themes';

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
    },
    headerTitleBlack: {
        color: '#D42026',
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        fontWeight:'900',
        lineHeight: 19
    },
    headerTitleLight: {
        color: '#D42026',
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        fontWeight:'300',
        lineHeight: 19
    },
});

export default class Header extends Component {

    state = {
        searchTerm: ''
    };

    _searchTerm = () => {

        const { searchTerm } = this.state;
        const { requestCharacters, onChangePage } = this.props;

        if ( searchTerm ) {
            requestCharacters({nameStartsWith: searchTerm, offset: 0, limit: 4});
        } else {
            requestCharacters({offset: 0, limit: 4});
        }

        onChangePage(1);
    };

    render () {
        return (
            <View>
                <View style={{marginTop: 12, marginBottom: 12, marginLeft: 20, marginRight: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.headerTitleBlack}>BUSCA MARVEL</Text>
                        <Text style={styles.headerTitleLight}>TESTE FRONT-END</Text>
                    </View>
                    <View style={{width: 50, height: 2, backgroundColor: Colors.red}} />
                </View>
                <View style={{marginLeft: 20, marginRight: 20, marginBottom: 12}}>
                    <Text style={{color: Colors.red}}>Nome do personagem</Text>
                    <TextInput
                        style={{borderWidth: 1, borderColor: 'gray'}}
                        onChangeText={(text) => this.setState({searchTerm: text})}
                        returnKeyType="search"
                        value={this.state.searchTerm}
                        onSubmitEditing={this._searchTerm}
                        clearButtonMode="while-editing"
                    />
                </View>
            </View>
        );
    }
}
