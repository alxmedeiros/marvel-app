import React, { Component } from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
const { persistor, store } = configureStore();

import { Colors } from 'app/themes';

export default class Entrypoint extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator size={'large'} color={Colors.primary} />}
                    persistor={persistor}
                >
                    <StatusBar barStyle={'light-content'} backgroundColor={Colors.accent} />
                    <Navigator />
                </PersistGate>
            </Provider>
        );
    }
}
