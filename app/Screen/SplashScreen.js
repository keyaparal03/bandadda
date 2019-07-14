import React, { Component } from "react";
import { Text, View, StyleSheet,Image, TouchableOpacity,WebView } from 'react-native';
import { Container, Icon,  Left, Right, Body, Header, Button, Title } from "native-base";



export default  class SplashScreen extends React.Component {

    render() {
      return (
        <View style={styles.container}>
          <Image source = {{uri:'https://www.bandadda.com/wp-content/uploads/2019/03/logo.jpg'}}  style={styles.logo}
          />
        </View>
      );
    }
  }

  const styles=StyleSheet.create({

    
    logo : {
      width: 200,
      height: 50,
      marginBottom : 50
  
    },
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#fff' 

    }
  
  });
