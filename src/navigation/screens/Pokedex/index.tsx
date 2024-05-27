import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokedexScreen from './screens/Pokedex';
import PokemonScreen from './screens/Pokemon';
import {PokedexStackParamList} from './types';

const Pokedex = () => {
  const Stack = createNativeStackNavigator<PokedexStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: '',
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Pokedex;
