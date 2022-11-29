import React, { useState } from 'react';
import { SafeAreaView,
     View, FlatList, 
     StyleSheet, Text, 
     TouchableOpacity,
     Image,
    StatusBar } from 'react-native';
    
    export default CustomerItem = ({ item, onPress, style, onDelete , onEdit  }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
          <View style={{flex:8, height: 50, flexDirection: 'row'}} >
              <View style={{flex:7, height: 50}}>
                  <Text style={styles.title}>{item.name}</Text>
              </View>
              <View style={ {flex: 1}} >
              <TouchableOpacity onPress={()=>{
                  console.log("edit record "+item.id);
                  onEdit(item.id);
              }}>
              <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://training.pyther.com/icons/edit.png?9',
              }}
            />
            </TouchableOpacity>
           </View>
              <View  style={{flex:1, height: 50}}>
                  <TouchableOpacity onPress={()=>{
                      //DATA = DATA.filter((record)=>(record.id != item.id));
             
                      console.log("delete record item "+item.id);
                      onDelete(item.id);
                  }}>
              <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://training.pyther.com/icons/delete.png',
              }}
            />
            </TouchableOpacity>
              </View>
          </View>
          <View style={{flex:2,  height: 50}} >
              <Text style={styles.email}>{item.email}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
          </View>
        </View>
    </TouchableOpacity>
  );


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