import React, { Component } from "react";
import { Text, View, StyleSheet,WebView,ActivityIndicator } from 'react-native';
import { Container, Icon,  Left, Right, Body, Header, Button, Title } from "native-base";
import NavigationService from '@Service/Navigation';

export default class DesignIdea extends Component {
  ActivityIndicatorLoadingView() {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
        color="#009688"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true
    };

  }
  componentDidMount(){
    setTimeout(function(){
      this.setState({
        isLoading:false
      });
    }.bind(this), 3000);
    
  }

  render() {

    return (
      <Container style={{backgroundColor:'#fff'}}>
       
       <Header  style={styles.header}>
          <Left>
          <Button transparent onPress={() => {
                      NavigationService.openDrawer()
                      }}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Collections</Title>
          </Body>
          <Right />
        </Header>

        <View style={styles.container}>
            <WebView
                source={{uri: 'https://www.bandadda.com/design-ideas/?mv=1'}} renderLoading={this.ActivityIndicatorLoadingView}  startInLoadingState={true}
                style={styles.webviewstyle}
            />
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
  webviewstyle:{
    marginTop: 20
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor:'#DC352F',
    color : '#fff'
  },
});