import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eac871',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    label: {
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
      borderColor: '#8e9aaf',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      marginBottom: 15,
    },
    buttonActiveBatSinal: {
      alignSelf: 'center',
      color: '#ffffff',
      backgroundColor: '#e76e50',
      fontSize: 25,
      marginTop: 25,
      marginBottom: 50,
      padding: 20,
      borderRadius: 10,
    },
    map: {
      alignSelf:'center',
      maxWidth: '100%',
      width: 400,
      height: 200,
      marginBottom: 15,
    },
    batSinalContainer: {
      flex: 1,
      width: '100%',
      backgroundColor:'red',
      borderRadius: 50,
    },
    batSinalImg: {
      alignSelf: 'center',
      width: 300,
      height: 300,
    },
    batSinalText: {
      alignSelf: 'center',
      fontSize: 25,
      color: "#ffffff",
      backgroundColor: "#000000",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
    },
    buttonBatSinalDesligar: {
      alignSelf: 'center',
      width: 200,
      height: 200,
      marginTop: 50,
    },
  });