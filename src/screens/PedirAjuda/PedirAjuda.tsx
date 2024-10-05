import React, {useState} from 'react';
import { View, Text,TextInput } from 'react-native';

import { styles } from './pedirAjudaStyle';

export function PedirAjuda({navigation}) {
  const [name, onChangeName] = useState('');
  const [phone, onChangePhone] = useState('');
  const [observation, onChangeObservation] = useState('');
  const [location, onChangeLocation] = useState('');

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <TextInput 
          style={styles.input}
          value={name}
          onChangeText={(input) => onChangeName(input)}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput 
          style={styles.input}
          value={phone}
          onChangeText={(input) => onChangePhone(input)}
        />

        <Text style={styles.label}>Observação</Text>
        <TextInput 
          style={styles.input}
          value={observation}
          onChangeText={(input) => onChangeObservation(input)}
        />

        <Text style={styles.label}>Localização</Text>
        <TextInput 
          style={styles.input}
          value={location}
          onChangeText={(input) => onChangeLocation(input)}
        />

        <Text style={styles.button} onPress={() => navigation.goBack()} >Screen of Help</Text>
    </View>
  );
}