import React, { useState } from 'react';
import { Text, TextInput, Button,  View } from 'react-native';

let getTextBox = (show) =>{
    if(show){
        return(<TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            defaultValue="Name me!"
          />)
    }
}

const ShowHide = () => {
    const [show,setShow] = useState(true);
  return (
    <View>
      <Text>Hello, I am...</Text>
        {getTextBox(show)}
      <Button title='Show / Hide' onPress={()=>{
          console.log(' hide TextInput ');
          setShow((prevVal)=>(!prevVal));
      }} />
    </View>
  );
}

export default ShowHide;