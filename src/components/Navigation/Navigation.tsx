import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, Image, View } from 'react-native';
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

  const MyTheme= {
    dark: false,
    colors: {
      primary: 'rgb(10, 132, 255)',
      background: 'rgb(1, 1, 1)',
      card: '#000000',
      text: 'rgb(229, 229, 231)',
      border: 'rgb(39, 39, 41)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{
            statusBarStyle: 'light',
            statusBarColor: '#000000',
            navigationBarColor: '#eac871',
            // headerTransparent: true,
          }}>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerTitle: () => <BatmanHeader/>,
              // navigationBarHidden: true,
              navigationBarColor: '#000000',
            }}
          />
          <Stack.Screen 
            name='PedirAjuda' 
            component={PedirAjuda} 
            options={{
              title:'Formulário de Socorro',
            }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}