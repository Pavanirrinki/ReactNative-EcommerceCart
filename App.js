import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './Cart/Signup';
import Login from './Cart/Login';
import LandingPage from './Cart/LandingPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Cart/HomePage';
import SingleProduct from './Cart/SingleProduct';
import { Provider,useSelector,useDispatch } from 'react-redux';

import  store from "./Redux/Store.js"
import Cartitems from './Cart/Cartitems';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function App() {
  const Stack = createStackNavigator();
 
 // useEffect(async ()=>{
  
// const user = await AsyncStorage.getItem('user_details');
// const product = await AsyncStorage.getItem('user_cart');
  // console.log(product,'123456788');
//  console.log(user);
 //clearData()
//  },[])

    // await AsyncStorage.removeItem('user_details');
  // const clearData = async () => {
  //   try {
  //   const product =  await AsyncStorage.removeItem('user_cart');
     
  //     console.log("user1122233344567890-",product)
  //     console.log('Data cleared successfully!');
      
  //   } catch (error) {
  //     console.error('Error clearing data:', error);
  //   }
  // };


  return (
    <Provider store={store}>
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen name='LandingPage' component={LandingPage} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Homescreen" component={HomePage} />
          <Stack.Screen name="SingleProduct" component={SingleProduct}  options={{
          title: 'Product', 
          }}/>
           <Stack.Screen name="CartItems" component={Cartitems} />
        </Stack.Navigator>
      </NavigationContainer>
  
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    maxWidth:"80%",
    marginLeft:"10%"
  },
});
