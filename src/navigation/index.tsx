/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Account from './screens/Account';
import Favorite from './screens/Favorite';
import Pokedex from './screens/Pokedex';
import {StyledPokeball} from './styles';

const Tab = createBottomTabNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Pokedex">
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({color, size}) => (
              <Icon name="favorite" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pokedex"
          component={Pokedex}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => renderPokeball(),
            title: '',
            headerTransparent: true,
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: 'Cuenta',
            tabBarIcon: ({color, size}) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;

const renderPokeball = () => {
  return <StyledPokeball source={require('../assets/pokeball.png')} />;
};
