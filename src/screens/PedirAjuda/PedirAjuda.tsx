import React, {useEffect, useState} from 'react';
import { View, Text,TextInput,Vibration, Alert } from 'react-native';
import { styles } from './pedirAjudaStyle';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

export function PedirAjuda({navigation}) {
  const [name, onChangeName] = useState('');
  const [phone, onChangePhone] = useState('');
  const [observation, onChangeObservation] = useState('');


  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
      (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
      text = errorMsg;
  } else if (location) {
      text = JSON.stringify(location);
  }

  console.log(text);

  function BatSinalAtivo() {
    Vibration.vibrate(2 * 1000);
    Alert.alert('Bat Sinal Ativado', `Fique calmo(a) ${name} logo o morcego chegará aí \n${latitude} ${longitude}`)
  }

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
          keyboardType='phone-pad'
          style={styles.input}
          value={phone}
          onChangeText={(input) => onChangePhone(input)}
        />

        <Text style={styles.label}>Localização</Text>
        <TextInput 
          style={styles.input}
          editable={false}
          value={'' + latitude}
        />

        <MapView 
          region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
          }}
          onPress={() => console.log(latitude)}
          mapType='hybrid' 
          style={styles.map} />

        <Text style={styles.label}>Observação</Text>
        <TextInput
          numberOfLines={10} 
          style={[styles.input, {textAlignVertical: 'top'}]}
          value={observation}
          onChangeText={(input) => onChangeObservation(input)}
        />

        <Text style={styles.button} onPress={BatSinalAtivo} >Screen of Help</Text>
    </View>
  );
}