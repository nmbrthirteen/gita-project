import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Candle = ({color,id,deleteRecord}) => {
  return (
    <View
    style={{
      width:'100%',height:80
    }}>
        <View style={[styles.container, {
        flexDirection: "row"
        }]}>
        <View style={{ flex: 8, backgroundColor: color }} />
        <View style={{ flex: 2, backgroundColor: "red" }} >
            <TouchableHighlight onPress={()=>{ 
              console.log(" implement delete "+id);
              deleteRecord(id);
              }}>
              <Text style={{color:'white',fontSize:15,marginTop:0}}> Delete </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>{ 
              console.log(" implement delete "+id);
              deleteRecord(id);
              }}>
                <Text style={{color:'white',fontSize:15,marginTop:0}}> Copy </Text>
            </TouchableHighlight>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Candle;