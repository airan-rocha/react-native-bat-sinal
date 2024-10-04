import React from 'react';
import { Image, Text, View } from 'react-native';
import morcegoLogo from '../../../assets/morcego-logo.png'

import { styles } from './homeStyle';

export function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Image style={styles.morcegoLogo} source={morcegoLogo}/>
        <Text style={styles.buttonHelp} onPress={() => navigation.navigate('PedirAjuda')}>SOCORRO</Text>
    </View>
  );
}