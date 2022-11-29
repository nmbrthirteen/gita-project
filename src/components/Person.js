import React from 'react'; // import lib
import {Text,Button,View} from 'react-native';

export function Person({name,email}){
  return (
    <View style={{marginLeft:10,marginTop:10}}>
      <Text>Person Comp</Text>
      <Text>Name {name}</Text>
      <Text>Email {email}</Text>
  </View>
  );
};

export class PersonC extends React.Component{
    render(){
        return(
            <View style={{marginLeft:10,marginTop:10}}>
            <Text>PersonC Class Comp</Text>
            <Text>Name {this.props.name}</Text>
            <Text>Email {this.props.email}</Text>
            </View>
            );
    }
}