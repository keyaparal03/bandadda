import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity,Keyboard,AsyncStorage,Image } from 'react-native';
import { Container, Icon,  Left, Right, Body, Header, Button, Title } from "native-base";
import NavigationService from '@Service/Navigation';
import { TextInput } from "react-native-gesture-handler";
import Storage from '@Utils/Storage';
import CodePush from 'react-native-code-push';

export default class TextArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }
  login = ()=>{
     const {username,password} = this.state;
     //send data to server
     if(username=='')
     {
       alert("Please Enter username!");
     }
     else if(password=='')
     {
       alert("Please Enter password!");
     }
     else{
        fetch('http://beta.bandadda.com/wp-json/api/login',{
          method:'post',
          header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body:JSON.stringify({
            // we will pass our input data to server
            username: username,
            password: password
          })

        })
        .then((response)=>response.json())
          .then( async (responseJson)=>{
          // AsyncStorage.setItem( "userData", responseJson );
          // AsyncStorage.setItem( "loginflag", 1 );
          await Storage.set('userData',responseJson);
         
          CodePush.restartApp();

          
          this.props.navigation.navigate("Home");
        })
        .catch((error)=>{
          alert("Something went wrong.Please try after some time.", error);
        })
     }
    

    //  alert(username+password);
     Keyboard.dismiss();
  }
  render() {

    return (
      <Container style={styles.maincontainer}>
       <Header  style={styles.header}>
          <Left>
          <Button transparent onPress={() => {
                  NavigationService.openDrawer()
                  }}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
            <View></View>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <Image source = {{uri:'https://www.bandadda.com/wp-content/uploads/2019/03/logo.jpg'}}  style={styles.logo}
          />
          <TextInput placeholder="Enter Email" onChangeText={username=>this.setState({username})} style={styles.textinput}/>
          <TextInput placeholder="Enter Password" onChangeText={password=>this.setState({password})} style={styles.textinput}/>
          <TouchableOpacity onPress={this.login} style={styles.submitbutton}>
              <Text style={styles.submitbuttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles=StyleSheet.create({

  maincontainer: {
    backgroundColor:'#fff'
  },
  logo : {
    width: 200,
    height: 50,
    marginBottom : 50

  },
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  textinput : {
    width:250,
    padding:10,
    borderColor:'#000',
    borderStyle:'solid',
    borderWidth:1,
    marginBottom:20
  },
  submitbutton : {
    width:250,
    padding:10,
    backgroundColor:'#000000',
    alignItems:'center'
  },
  submitbuttonText : {
    color:'#fff'
  },
  header: {
    backgroundColor:'#DC352F',
    color : '#fff'
  }

});