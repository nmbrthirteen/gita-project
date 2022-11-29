import React from 'react';
import {Text,Button,View} from 'react-native';

const ButtonEx = function(){
  return (
    <View>
      <Text>Hello to React Native</Text>
      <Button onPress={()=>{alert('Hello')}}  title="Hello "></Button>
  </View>
  );
};
export default ButtonEx;
