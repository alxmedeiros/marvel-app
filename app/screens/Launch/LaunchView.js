import React, { Component } from 'react';
import { View, Image, ActivityIndicator, Dimensions, Text } from 'react-native';
import { Styles, Images, Colors } from '../../themes';
import Spacer from '../../components/Spacer';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width-80;

class LaunchView extends Component {

    render() {
        return (
            <View style={Styles.screen.fullCentered}>
                <Image
                    source={Images.logo}
                    style={{ width: imageWidth }}
                    resizeMode={'contain'}
                />
                <Spacer size={40}/>
                <ActivityIndicator size={'large'} color={Colors.primary} />
                <Text style={{color: Colors.primary}}>Carregando dados...</Text>
            </View>
        );
    }
}

export default LaunchView;
