import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import GerEventos from '../pages/GerEventos';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
   <Stack.Navigator inicialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{header:()=> null}}/>
     <Stack.Screen name="Adicionar Eventos" component={GerEventos}  options={{header:()=> null}} />
   </Stack.Navigator>
  );
};

export default Main;