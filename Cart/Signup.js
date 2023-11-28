import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup({navigation}) {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleRegistration = async () => {
  await AsyncStorage.setItem("user_details",JSON.stringify({username,email}));
  setTimeout(()=>{
navigation.navigate("Login")
  },2000)
};
  return (
    <View style={styles.container}>
        <TextInput placeholder='enter your name' style={styles.input} onChangeText={(text) => setUsername(text)} value={username}/>
        <TextInput placeholder='enter your email'   onChangeText={(text) => setEmail(text)} value={email}  keyboardType="email-address" style={styles.input}/>
        <TextInput placeholder='enter your password'  style={styles.input} secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password}/>
        <TouchableOpacity style={styles.button} >
      <Button title='register' onPress={handleRegistration}/>
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
