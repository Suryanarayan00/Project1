import React from 'react';
import {View, Text} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style={{flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello</Text>
      </View>
    )
  }
}