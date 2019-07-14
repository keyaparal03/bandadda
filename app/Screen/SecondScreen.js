import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Icon,  Left, Right, Body, Header, Button, Title } from "native-base";
import NavigationService from '@Service/Navigation';

export default class TextArea extends Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
      <Container style={{backgroundColor:'#fff'}}>
       
       <Header>
          <Left>
          <Button transparent onPress={() => {
                      NavigationService.openDrawer()
                      }}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={() => {
                      NavigationService.navigate('HomeScreen')
                      }}>
                <Text>SecondScreen</Text>
            </TouchableOpacity>
          
          </View>
  
         

      </Container>
    );
  }
}

const styles=StyleSheet.create({


});