

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

export default function HomePage({ navigation }) {
  const [items, setItems] = useState(null);
  const dispatch = useDispatch();
const selector = useSelector((state)=>state.CartReducer)

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const result = await response.json();
      return setItems(result);
    } catch (error) {
      return console.error('Error fetching data:', error);
    }
  }

  const Particularproduct = (index) => {
    dispatch({
      type: "PARTICULAR_PRODUCT_SUCCESS",
      payload: index
    });
    navigation.navigate('SingleProduct');
  }
  const Addtocart = async (data) => {
    const existingproduct =await AsyncStorage.getItem("user_cart");
    const cart_product = existingproduct ? JSON.parse(existingproduct):'';
   console.log("existingproduct",cart_product) 
try {
       dispatch({
        type: "PARTICULAR_CARTPRODUCT_SUCCESS",
        payload: data
      });
      const updatedproduct1234 =[...cart_product,data];
      await AsyncStorage.setItem("user_cart",JSON.stringify(updatedproduct1234));
     
} catch (error) {
      console.error('Error storing data:', error);
    }
  };


  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      {items ? (
        items.map((data, index) => (
          <TouchableOpacity
            key={index}
            style={styles.container}
            onPress={() => Particularproduct(data.id)}
          >
            <View>
              <Image
                source={{ uri: data.image }}
                style={styles.image}
                onError={(error) => console.error('Error loading image:', error.nativeEvent.error)}
              />
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.description}>{data.description}</Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={styles.rating}>Rating: {data.rating.rate} stars</Text>
                <Text style={styles.rating}>Price: ₹{data.price}</Text>
              </View>
              <Text style={styles.delivery}>free delivery</Text>
              <View style={{ height: 80 }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <TouchableOpacity style={[styles.buttonContainer, styles.button1]} onPress={() => Addtocart(data)}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.buttonContainer, styles.button2]} onPress={() => navigation.navigate('Homescreen')}>
                    <Text style={styles.buttonText}>BUY NOW</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.delivery}>Loading.........</Text>
      )}
    </ScrollView>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: '#3498db',
    marginBottom: 87,
    width: "90%",
    marginLeft: "5%"
  },

  title: {
    marginLeft: 10,
    fontWeight: '900',
    fontSize: 20, textShadowOffset: {
      height: 5,
      width: 5
    },
    textShadowColor: "grey",
    textShadowRadius: 7,

  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,

  },
  description: {
    color: "grey",
    margin: 5
  },
  rating: {
    fontSize: 20,
    color: "#050801",
    fontWeight: "bold"
  },
  delivery: {
    textAlign: "center",
    marginTop: 10,
    color: "grey",
    fontWeight: "bold"
  }, buttonContainer: {

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
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button2: {
    backgroundColor: "#fb641b"
  },
  button1: {
    backgroundColor: "#ff9f00"
  }
});