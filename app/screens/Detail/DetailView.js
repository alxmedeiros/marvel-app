import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors, Styles} from '../../themes';

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

class DetailView extends Component {

    render() {
        const { selected } = this.props;
        const { goBack } = this.props.navigation;

        return (
            <View style={Styles.screen.full}>
                <View style={{marginTop: 12, marginBottom: 12, marginLeft: 20, marginRight: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                            style={{width: 30, height: 30, marginRight: 10, alignItems: 'center', justifyContent: 'center'}}
                            onPress={() => goBack()}>
                            <Icon name="angle-left" size={30} color={'#D42026'} />
                        </TouchableOpacity>
                        <Text style={styles.headerTitleBlack}>BUSCA MARVEL</Text>
                        <Text style={styles.headerTitleLight}>TESTE FRONT-END</Text>
                    </View>
                    <View style={{width: 50, height: 2, backgroundColor: Colors.red, marginLeft: 40}} />
                </View>
                <View style={{borderTopWidth: 1, borderTopColor: Colors.red}}>
                    <Text style={{color: Colors.red, fontSize: 20, fontWeight: 'bold', marginTop: 10, marginLeft: 20, marginBottom: 10, marginRight: 20}}>{selected.name}</Text>
                    <View style={{backgroundColor: 'red', height: 200}}>
                        <Image
                            source={{uri: `${selected.thumbnail.path}.${selected.thumbnail.extension}`}}
                            style={{flex: 1}}
                        />
                    </View>
                    <View>
                        <Text style={{padding: 20}}>
                            {selected.description}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default DetailView;
