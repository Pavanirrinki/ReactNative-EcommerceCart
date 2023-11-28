import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { View, Text, StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native';

export default function Cartitems({navigation}) {
 
 const dispatch = useDispatch();
const consumer = useSelector((state)=>state.CartReducer.cartProducts);
console.log("consumer",consumer)
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
    {consumer && consumer.length > 0 ? (
      consumer.map((particularItem, index) => (
        <View key={index} style={styles.container}>
          <Image
            source={{ uri: particularItem?.image }}
            style={styles.image}
            onError={(error) => console.error('Error loading image:', error.nativeEvent.error)}
          />
          <Text style={styles.title}>{particularItem?.title}</Text>
          <Text style={styles.description}>{particularItem?.description}</Text>
          <View style={styles.ratingAndPrice}>
            <Text>Rating: {particularItem?.rating?.rate} stars</Text>
            <Text style={styles.rating}>Price: ₹{particularItem?.price}</Text>
          </View>
          <Text>Free delivery</Text>
          <View style={{ height: 80 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity style={[styles.buttonContainer, styles.button1]}>
                <Text style={styles.buttonText}>Remove from Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))
    ) : (
      <Text>No items in the cart.</Text>
    )}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    marginTop:20
  },
  image: {
  height: 200,
  width: 200,
  borderRadius: 10,

},
title:{
 color:"black",
 fontSize:20,
 fontWeight:"light",
 fontFamily:"Roboto",
 marginTop:10,
 marginBottom:10,
 backgroundColor:"#d9d9d9",
 padding:16,
 width:"90%",
 textAlign:"center",
 borderRadius:15
},
description:{
  color:"grey",
  marginBottom:10
},
ratingandprice:{
  flex:1,
  flexDirection:"row",
  justifyContent:"space-around",
  width:'80%',
 backgroundColor:"#d9d9d9",
  borderRadius:15,
alignItems:"center"
},
rating:{
  fontWeight:"bold",
  fontSize:25
},
buttonContainer: {

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
  fontSize:25,
  paddingLeft:20,
  paddingRight:20,
},
button2:{
  backgroundColor:"#fb641b"
},
button1:{
  backgroundColor:"#ff9f00"
}
});
