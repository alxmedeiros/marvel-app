import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Colors, Styles} from '../../themes';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import List from '../../components/List/List';

class HomeView extends Component {

    _openDetail = (item) => {
        const { requestCharacterDetails } = this.props;

        requestCharacterDetails(item);
    };

    render() {
        const { results } = this.props;

        return (
            <View style={Styles.screen.full}>
                <Header {...this.props} />
                <View style={{height: 30, backgroundColor: Colors.red, paddingLeft: 88, justifyContent: 'center'}}>
                    <Text style={{color: '#ffffff'}}>Nome</Text>
                </View>
                <View style={{flex: 1}}>
                    <List data={results} onSelect={(item) => this._openDetail(item)} />
                </View>
                <Footer {...this.props} />
                <View style={{height: 15, backgroundColor: Colors.red}} />
            </View>
        );
    }
}

export default HomeView;
