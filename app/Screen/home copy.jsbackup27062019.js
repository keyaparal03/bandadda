import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Icon,  Left, Right, Body, Header, Button, Title } from "native-base";
import NavigationService from '@Service/Navigation';
import { SliderBox } from 'react-native-image-slider-box';
import SimpleAccordion from 'react-native-simple-accordian';


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
      'https://source.unsplash.com/1024x768/?tree'
      ]
    };

  }


  render() {

    return (
      <Container style={{backgroundColor:'#fff'}}>
       
       <Header style={styles.header}> 
          <Left>
          <Button transparent onPress={() => {
                      NavigationService.openDrawer()
                      }}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Bandadda</Title>
          </Body>
          <Right />
        </Header>

        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
             <SliderBox images={this.state.images} circleLoop />
            </View>
            <View style={[styles.box, styles.box2]}>
            <Text>Home page content</Text>

            </View>
            <View style={[styles.box, styles.box3]}>

           


            </View>
        </View>
         

      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: 200
  },
  box1: {
    // backgroundColor: '#2196F3'
  },
  box2: {
    // backgroundColor: '#8BC34A'
  },
  box3: {
    // backgroundColor: '#e3aa1a'
  },
  header: {
    backgroundColor:'#DC352F',
    color : '#fff'
  },
});