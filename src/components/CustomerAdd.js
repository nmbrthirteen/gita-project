import React, { useEffect, useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity,  View } from 'react-native';

const defaultCustomer = {
    id:0,
    name:'',
    email:'',
    phone:'',
    address:''
};
export const CustomerAdd = ({addItem,selectCustomer,updateCustomer}) => {
    const [customer,setCustomer] = useState({...defaultCustomer});
    const [addlabel,setAddLabel] = useState("Add Customer");
    useEffect(()=>{
      //const tempCustomer = defaultCustomer;
      if(selectCustomer !=null){
        setCustomer({...selectCustomer});
        setAddLabel("Update Customer");
      }else{
        setCustomer({...defaultCustomer});
        setAddLabel("Add Customer");
      }

    },[selectCustomer])
  return (
    <View>
      <Text> Customer Form </Text>
      <TextInput
        placeholder='Name'
        value={customer.name}
        onChangeText={(name)=>{
            console.log("val:"+name)
            setCustomer({...customer,name})
        }}
        style={styles.input}
      />
      <TextInput
        placeholder='Email'
        value={customer.email}
        onChangeText={(email)=>{
            setCustomer({...customer,email})
        }}
        style={styles.input}
      />
      <TextInput
        placeholder='Phone'
        value={customer.phone}
        onChangeText={(phone)=>{
            setCustomer({...customer,phone})
        }}
        style={styles.input}
      />
        <TextInput
        placeholder='Address'
        value={customer.address}
        onChangeText={(address)=>{
            setCustomer({...customer,address})
        }}
        style={styles.input}
      />
      <View styles={{flex:1,
          flexDirection: 'column'}}>
      <TouchableOpacity style={{ alignItems:'center', height:30, width:'45%', margin:8,
      backgroundColor:'lightblue'}} onPress={()=>{
        if(customer.id  === 0 ){ //add 
          customer.id= Date.now()+"d";
          addItem(customer);
          setCustomer({...defaultCustomer});
          console.log("Add Customer ");
        }else{ //update
          updateCustomer(customer);
        }
      }}>
          <Text>{addlabel}</Text>
      </TouchableOpacity >
      <TouchableOpacity style={{ alignItems:'center',  height:30, width:'45%', margin:8,
      backgroundColor:'grey'}}><Text>Cancel</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default CustomerAdd;
