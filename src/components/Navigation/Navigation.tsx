import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button,Text, Image, View } from 'react-native';
import { Home } from '../../screens/Home/Home';
import { PedirAjuda } from '../../screens/PedirAjuda/PedirAjuda';
import batmamLogo from '../../../assets/batman-logo.png';

const Stack = createNativeStackNavigator();

function BatmanHeader() {
  return (
    <View 
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20,
      }}
    >
      <Text style={{color:'#ffffff'}}>Bat</Text>
      <Image style={{width: 50, height: 50, marginHorizontal: 10}} source={batmamLogo} />
      <Text style={{color:'#ffffff'}}>Sinal</Text>
    </View>
  );
}

export function Navigation() {

  return (
    <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              statusBarStyle: 'light',
              statusBarColor: 'rgb(18, 18, 18)',
              navigationBarColor: '#eac871',
              headerTitle: () => <BatmanHeader/>
            }}
          />
          <Stack.Screen 
            name='PedirAjuda' 
            component={PedirAjuda} 
            options={{
              title:'Formulário de Socorro',
              statusBarStyle: 'light',
              statusBarColor: 'rgb(18, 18, 18)',
              navigationBarColor: '#eac871',
            }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}