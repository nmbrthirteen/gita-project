import {Text,Button} from 'react-native';
import React,{useState} from 'react';

export class CounterC extends React.Component{
    state = {count:0};
    componentDidMount(){
        console.log(">> componentDidMount ")
    }

    com
    render(){
        return (<>
            <Text> Count: {this.state.count} </Text>
            <Button title='Increment' onPress={()=>{
                this.setState({count:this.state.count +1});
            }}></Button>
            <Button title='Reset' onPress={()=>{
                this.setState({count:0});
            }}></Button>
            <Button title='Decrement' onPress={()=>{
                this.setState({count:this.state.count -1});
            }}></Button>
        </>);
    }
}

export function Counter (){
    const [count,setCount] = useState(0); //initial Value
    return (<>
        <Text> Count: {count} </Text>
        <Button title='Increment' onPress={()=>{
            setCount(count +1 );
            console.log("count :"+count);
        }}></Button>
        <Button title='Reset' onPress={()=>{
            setCount(0);
            console.log("count :"+count);
        }}></Button>
        <Button title='Decrement' onPress={()=>{
            setCount(count-1);
            console.log("count :"+count);
        }}></Button>
    </>);
}
