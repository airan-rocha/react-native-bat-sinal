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
    button: {
      alignSelf: 'center',
      color: '#ffffff',
      backgroundColor: '#e76e50',
      marginTop: 25,
      padding: 20,
      borderRadius: 10,
    },
    map: {
      alignSelf:'center',
      width: '90%',
      height: 200,
    }
  });