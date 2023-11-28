import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({navigation}) {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
  const value = await AsyncStorage.getItem('user_details');
  const user_details = JSON.parse(value);
  if(email == user_details.email){
    navigation.navigate("Homescreen")
  }
  
  };
  return (
    <View style={styles.container}>

        <TextInput placeholder='enter your email'   onChangeText={(text) => setEmail(text)} value={email}  keyboardType="email-address" style={styles.input}/>
        <TextInput placeholder='enter your password'  style={styles.input} secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password}/>
        <TouchableOpacity style={styles.button} >
      <Button title='Login' onPress={handleRegistration}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
   marginTop:"50%",
    maxWidth:"80%",
    marginLeft:"10%"
  },
  input: {

    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
