import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import Launch from 'app/screens/Launch';
import Home from 'app/screens/Home';
import Detail from 'app/screens/Detail';

const AppStack = createStackNavigator({
    Home: Home,
    Detail: Detail
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        header: null
    }
});

const RNApp = createSwitchNavigator(
    {
        Launch: Launch,
        App: AppStack
    },
    {
        initialRouteName: 'Launch'
    }
);

export default createAppContainer(RNApp);
