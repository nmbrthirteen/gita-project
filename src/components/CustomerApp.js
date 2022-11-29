import React, { useState } from 'react';
import { SafeAreaView,
     View, FlatList, 
     StyleSheet, Text, 
     TouchableOpacity,
     Image,
    StatusBar } from 'react-native';
import { addCustomer, deleteCustomer, getCustomers } from '../services/CustomerData';
import CustomerAdd from './CustomerAdd';
import CustomerItem from './CustomerItem';
import { updateCustomer } from '../services/CustomerData';

const CustomerApp = () => {
  const [customers,setCustomers] = useState(getCustomers());
  const [selectCustomer,setSelectCustomer] = useState(null);
  const renderItem = ({ item }) => (
    <CustomerItem
        item={item}
        onPress={() => {}}
        style={{  }}
        onDelete = {(id)=>{
            console.log("delete record by Id "+id);
            deleteCustomer(id);
            setCustomers([...getCustomers()]);
        }}
        onEdit = {(id)=>{
          console.log("edit record by Id "+id);
          const temp = customers.filter((item)=>(item.id === id));
          if(temp.length > 0){
            const record = temp[0];
            setSelectCustomer(record);
          }
          //setSelectCustomer(...temp[0]);

          setCustomers([...getCustomers()]);
      }}
      />
  );

  return (
    <SafeAreaView style={styles.container}>
        <CustomerAdd selectCustomer={selectCustomer}
        updateCustomer = {(customer)=>{
          updateCustomer(customer);
          setCustomers([...getCustomers()]);
        }}
            addItem={(customer)=>{
              addCustomer(customer);
              setCustomers([...getCustomers()]);
          }}/>
      <FlatList
        data={customers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex:1,
    flexDirection:'column'
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
});

export default CustomerApp;