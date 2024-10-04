import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './pedirAjudaStyle';

export function PedirAjuda({navigation}) {
  return (
    <View style={styles.container}>
        <Text onPress={() => navigation.goBack()} >Screen of Help</Text>
    </View>
  );
}