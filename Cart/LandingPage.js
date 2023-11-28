
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
const LandingPage = ({ navigation }) => {
  const dispatch = useDispatch();
const [userdata,setUserdata] = useState(null);
const [cart_products,setCart_products] = useState([]);
const consumer = useSelector((state)=>(state.CartReducer.cartProducts)) ;
useEffect(()=>{
Redux_data();

},[])
useEffect(()=>{
updated_cart_files()
},[cart_products])
useFocusEffect(
  React.useCallback(() => {
retrieveData();
 }, [])
);

  const retrieveData = async () => {
    try {
      const value =  await AsyncStorage.getItem('user_details');
    
      const user = JSON.parse(value);
       setUserdata(user);
  
} catch (error) {
      return console.error('Error retrieving data:', error);
    }
  };
 
  const Redux_data = async () => {
    try {
      const products = await AsyncStorage.getItem("user_cart");
      const updated_cart_products = JSON.parse(products);
       setCart_products(updated_cart_products);
     } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

const updated_cart_files = () =>{
  console.log("Cart products length:", cart_products?.length);
  if(cart_products?.length !== 0){
    console.log("pavan kumar is a good boy in every accept")
    cart_products?.map((data)=>{
      return (
      dispatch({
        type: 'PARTICULAR_CARTPRODUCT_SUCCESS',
        payload: data,
      })
      )
    })
  }
}

  console.log("pppppppppppppppppppppppp",cart_products?.length)

  return (
    <View style={{ height: '100%', width: '100%' }}>
       <StatusBar
        animated={true}
        backgroundColor="#61dafb"
      />

      <ImageBackground
        source={{ uri: 'https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg'}}
        style={styles.background}
      >
                <Text style={styles.heading} >E-commerce Cart</Text>
        <View style={styles.container}>
          {userdata == null ?
          <TouchableOpacity style={[styles.buttonContainer, styles.button1]} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText} >Signup</Text>
          </TouchableOpacity>:<TouchableOpacity style={[styles.buttonContainer, styles.button1]} onPress={() => navigation.navigate('Homescreen')}>
            <Text style={styles.buttonText} >HomePage</Text>
          </TouchableOpacity>}
          <TouchableOpacity style={[styles.buttonContainer, styles.button2]} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>LogIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, styles.button3]} onPress={() => navigation.navigate('CartItems')}>
            <Text style={styles.buttonText}>CartItems</Text>
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading:{
marginVertical:30,
textAlign:"center",
fontWeight:"bold",
fontSize:30,
color:"#a043c4",
textShadowOffset:{
    height:5,
    width:5
},
textShadowColor:"grey",
textShadowRadius:10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row",
  },
  buttonContainer: {
    flex: 1, // Equal flex to distribute space evenly
    padding: 15,
    borderRadius: 8,
    elevation: 5, // Add elevation for Android shadow
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:25
  },
  button1: {
    backgroundColor: '#3498db',
  },
  button2: {
    backgroundColor: '#2ecc71',
  },
  button3:{
    backgroundColor:"red"
  }
});

export default  LandingPage;
