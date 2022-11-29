import React, { useState } from 'react';
import { Text, Button, TextInput,  View } from 'react-native';
import Candle from './Candle';

const nextId = (array) =>{
    if(array.length > 0){
        const numberArr = array.map((item)=>(item.id));
        const max = Math.max(...numberArr);
        return max + 1;
    }else{
        return 1;
    }
}

const CandleApp = () => {
    const [candles,setCandles] = useState([{id:1, color:'green'},{id:2, color:'yellow'},{id:3,color:'pink'}])
    const addCandle = (color)=>{
        const id = nextId(candles);
        console.log("candle add "+color);
        setCandles([...candles,{color,id}])
    }
    const deleteRecord = (id) =>{
    console.log("delete request for id "+id);
    const temp = candles.filter((item)=>(item.id !== id));
    setCandles(temp);
   }
  return (
    <View>
        {candles.map((item)=>(
            <Candle key={item.id} color={item.color} id={item.id} deleteRecord={deleteRecord}/>
        ))}
        <Button title='Green' onPress={()=>{
            addCandle('green');
        }} /> 
        <Button title='PINK' onPress={()=>{
            addCandle('pink');
        }}/>
        <Button title='YELLOW' onPress={()=>{
            addCandle('yellow');
        }}/>
    </View>
  );
}
export default CandleApp;


