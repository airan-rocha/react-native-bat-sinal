import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import morcegoLogo from '../../../assets/morcego-logo.png'
import imgGotham from '../../../assets/gotham.jpeg'

import { styles } from './homeStyle';

export function Home({navigation}) {
  return (
    <View style={styles.container}>
        <ImageBackground resizeMode='stretch' source={imgGotham} style={styles.imgBackground}>
          <Image style={styles.morcegoLogo} source={morcegoLogo}/>
          <Text style={styles.buttonHelp} onPress={() => navigation.navigate('PedirAjuda')}>SOCORRO</Text>
        </ImageBackground>
    </View>
  );
}