import {Text,Button} from 'react-native';
import React,{useEffect, useState} from 'react';

export function Timer (){
    const [count,setCount] = useState(0); 
    const [intervalId,setIntervalId] = useState(0);
    console.log(">> Timer:"+count);
    const incrementFunc = () =>{
        setCount(count=>(count+1) ); 
        //console.log("count:"+count);
    }
    const startCounter = () =>{
        stopCounter();
        setIntervalId(setInterval(incrementFunc,1000));
    }
    const stopCounter = () =>{
        clearInterval(intervalId);
    }

    useEffect(()=>{
        console.log("called at mounting time");
        startCounter();
    },[])
    return (<>
        <Text> Count: {count} </Text>
        <Button title='Start Timer' onPress={startCounter}></Button>
        <Button title='Reset to 0' onPress={()=>{
            setCount(0);
            console.log("count :"+count);
        }}></Button>
        <Button title='Stop Timer' onPress={stopCounter}></Button>
    </>);
}
