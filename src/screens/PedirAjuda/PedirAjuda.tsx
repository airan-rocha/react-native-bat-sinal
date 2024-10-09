import React, {useEffect, useState} from 'react';
import { View, Text,TextInput,Vibration, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from './pedirAjudaStyle';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

export function PedirAjuda({navigation}) {
  const [name, onChangeName] = useState('');
  const [phone, onChangePhone] = useState('');
  const [observation, onChangeObservation] = useState('');

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [geoLocation, setGeoLocation] = useState({latitude: 0, longitude: 0});

  useEffect(() => {
      (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
      }
      const oi = 1;
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      setGeoLocation({latitude: location.coords.latitude ,longitude: location.coords.longitude});
      })();
  }, []);
  
  let text = 'Waiting..';
  if (errorMsg) {
      text = errorMsg;
  } else if (location) {
      text = JSON.stringify(location);
  }

  // console.log(text);
  
  const [displayActive, setDisplayActive] = useState(true);
  const [displayBgColorSinal, setDisplayBgColorSinal] = useState('red');

  let countOffInterval = 21;
  let count = 0;
  let intervalColor;
  let alterColor = true;


  function alterarBgColor() {
    intervalColor = setInterval(() => {
      alterColor = !alterColor;
      setDisplayBgColorSinal(alterColor ? 'yellow' : 'red');
      count++,
      console.log(`Seconds: ${count} - BatSinal Ativado`)
    }, 1 * 1000);
  }

  function AtivarBatSinal(actived: boolean) {
    let one_second = 1000;
    setDisplayActive(!actived);

    if(actived) {
      alterarBgColor();
      Vibration.vibrate(one_second);
    }else {
      Vibration.vibrate(one_second);
      clearInterval(intervalColor);
      intervalColor = null,
      console.log(`Bat Sinal - desativado`);
    };
    
    setTimeout(() => {
      clearInterval(intervalColor);
    }, countOffInterval * one_second);
  }

  return (
    <View style={styles.container}>
        <ScrollView style={[styles.formulario , {display: displayActive ? 'flex' : 'none'}]}>
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
            value={`${geoLocation.latitude} , ${geoLocation.longitude}`}
          />

          <MapView 
            region={{
              latitude: geoLocation.latitude,
              longitude: geoLocation.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            }}
            mapType='hybrid'
            scrollEnabled={false}
            style={styles.map} />

          <Text style={styles.label}>Observação</Text>
          <TextInput
            numberOfLines={10} 
            style={[styles.input, {textAlignVertical: 'top'}]}
            value={observation}
            onChangeText={(input) => onChangeObservation(input)}
          />

          <Text style={styles.buttonActiveBatSinal} onPress={() => AtivarBatSinal(true)} >Active</Text>
        </ScrollView>

        <ScrollView style={[styles.batSinalContainer, {display: !displayActive ? 'flex' : 'none', backgroundColor: displayBgColorSinal}]}>
          <Image 
            source={require('../../../assets/morcego-logo.png')}
            style={styles.batSinalImg}
          />  
          <Text style={styles.batSinalText}>Bat Sinal Ativado!</Text>

          <TouchableOpacity
            onPress={()=> AtivarBatSinal(false)}
          >
            <Image
              source={require('../../../assets/logo-IO.png')}
              style={styles.buttonBatSinalDesligar}/>
          </TouchableOpacity>

        </ScrollView>

    </View>
  );
}