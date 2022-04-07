import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider} from 'react-redux';

//screens
import Movies from '../container/Movies';
import TVShows from '../container/TVShows';
import store from '../../store/index';
import LogOut from '../container/LogOut';

const Tab = createMaterialBottomTabNavigator();

const TabBar = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Movies"
          activeColor="#2e66e4"
          inactiveColor="#dedede"
          style={{backgroundColor: '#000'}}
          barStyle={{backgroundColor: '#0f0f0f', padding: 4}}>
          <Tab.Screen
            name="Movies"
            component={Movies}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({color}) => (
                <Icon name="filmstrip" size={25} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="TVShows"
            component={TVShows}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({color}) => (
                <Icon name="television-classic" size={25} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={LogOut}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({color}) => (
                <Icon name="account" size={25} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default TabBar;
