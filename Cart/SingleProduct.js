import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';


export default function SingleProduct({navigation}) {
  const [itemid, setItemid] = useState(null);
 const [particularitems, setParticularitems] = useState(null);
 const dispatch = useDispatch();

  const data = useSelector((state) => state.SingleproductReducer);

const consumer = useSelector((state)=>console.log("state",state.CartReducer.cartProducts.count))

  useEffect(() => {
    if (data?.product && data.product !== itemid) {
      setItemid(data.product);
    }
  }, [data]);


  useEffect(() => {
    if (itemid !== null) {
      fetchData();
  }
}, [itemid]);


useEffect(()=>{
  if(particularitems){
Addcartproduct()
  }
},[particularitems])

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${itemid}`);
      
      // Check if the response is empty
      if (!response.ok) {
        throw new Error('Empty response');
      }

      const result = await response.json();
      setParticularitems(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

const Addcartproduct =async () =>{
  try{


  dispatch({
    type: "PARTICULAR_CARTPRODUCT_SUCCESS",
    payload: particularitems
  });
  
}catch(error){
  return console.error('Error retrieving data:', error);
}

}
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: particularitems?.image }}
        style={styles.image}
        onError={(error) => console.error('Error loading image:', error.nativeEvent.error)} />
      <Text style={styles.title}>{particularitems?.title}</Text>
      <Text style={styles.description}>{particularitems?.description}</Text>
      <View style={{ height: 40 }}>
        <View style={styles.ratingandprice}>
          <Text>Rating: {particularitems?.rating?.rate} stars</Text>
          <Text style={styles.rating}>Price: ₹{particularitems?.price}</Text>
        </View>

      </View>
      <Text>Free delivery</Text>
      <View style={{height:80}}>
      <View style={{flex:1,flexDirection:"row"}}>
 <TouchableOpacity style={[styles.buttonContainer, styles.button1]} onPress={Addcartproduct}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer, styles.button2]} onPress={() => navigation.navigate('Homescreen')}>
        <Text style={styles.buttonText}>BUY NOW</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
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
