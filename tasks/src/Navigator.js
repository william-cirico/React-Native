import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import TaskList from './screens/TaskList';
import Auth from './screens/Auth';
import Menu from './screens/Menu';
import commonStyles from './commonStyles';
import AuthOrApp from './screens/AuthOrApp';

const menuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: 20,
        },
        activeLabelStyles: {
            color: '#080',
            fontWeight: 'bold',
        }
    }
}

const menuRoutes = {
    Today: {
        name: 'Today',
        screen: props => <TaskList {...props} title='Hoje' daysAhead={0} />,
        navigationOptions: {
            title: 'Hoje'
        },
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <TaskList {...props} title='Amanhã' daysAhead={1} />,
        navigationOptions: {
            title: 'Amanhã'
        },
    },
    Week: {
        name: 'Week',
        screen: props => <TaskList {...props} title='Semana' daysAhead={7} />,
        navigationOptions: {
            title: 'Semana'
        },
    },
    Month: {
        name: 'Month',
        screen: props => <TaskList {...props} title='Mês' daysAhead={30} />,
        navigationOptions: {
            title: 'Mês'
        },
    },
};

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig);

const mainRoutes = {
    AuthOrApp: {
        name: 'AuthOrApp',
        screen: AuthOrApp,
    },
    Auth: {
        name: 'Auth',
        screen: Auth,
    },
    Home: {
        name: 'Home',
        screen: menuNavigator,
    },
};

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'AuthOrApp'
});

export default createAppContainer(mainNavigator);
