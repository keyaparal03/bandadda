import React, { Component } from "react";
import { Text, View, StyleSheet,Keyboard, TouchableOpacity,WebView,ActivityIndicator,Modal, TouchableHighlight,TextInput } from 'react-native';
import { Container, Icon,  Left, Right, Body, Header, Button, Title } from "native-base";
import NavigationService from '@Service/Navigation';
import { SliderBox } from 'react-native-image-slider-box';
import SimpleAccordion from 'react-native-simple-accordian';
import SplashScreen from '@Screen/SplashScreen';


export default class Home extends Component {
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
      isLoading:true,
      modalVisible: false
    };
  }
  componentDidMount(){
    setTimeout(function(){
      this.setState({
        isLoading:false
      });
    }.bind(this), 3000);
    
  }
  

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  searchsubmit = ()=>{
    this.setState({
      modalVisible:false,
      searchData:''
    });
    const {search} = this.state;
      //send data to server
      // alert(search)
      if(search=='')
      {
        alert("Please Enter search!");
      }
      else{
        // alert("aa"+search)
        fetch('http://bandadda.com/wp-json/api/search',{
          method:'post',
          header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body:JSON.stringify({
            // we will pass our input data to server
            search: search
          })

        })
        .then((response)=>response.json())
          .then( async (responseJson)=>{
            alert("response"+responseJson)
           
           NavigationService.navigate("Search", { searchData: responseJson});
          
        })
        .catch((error)=>{
          alert("Something went wrong.Please try after some time.", error);
        })
      }
    

    //  alert(username+password);
      Keyboard.dismiss();
  }
  render() {
   
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
   
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
          <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View style={styles.searchcontainer}>
              <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>X</Text>
                </TouchableHighlight>
                  {/* <TextInput placeholder="Search" onChangeText={search=>this.setState({search})} style={styles.textinput}/> */}
                  <TextInput placeholder="Search" onChangeText={(search) => {
                    this.setState({ search: search });
                  }} style={styles.textinput} />
                <TouchableOpacity  onPress={this.searchsubmit} style={styles.submitbutton}>
                    <Text style={styles.submitbuttonText}>Search</Text>
                </TouchableOpacity>

              
            </View>
          </View>
        </Modal>
            <Title>Bandadda</Title>
            {/* <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <Text icon={
                    <Icon
                      name="arrow-right"
                      size={15}
                      color="white"
                    />
                  }>Show Modal</Text>
            </TouchableHighlight> */}
            <Icon raised
            name='search'
            type='EvilIcons'
            color='#fff'
            onPress={() => this.setModalVisible(true) } ></Icon>
            
          </Body>
          <Right />
        </Header>

        <View style={styles.container}>
          <WebView
                source={{uri: 'https://www.bandadda.com/app-home/?mv=1'}} renderLoading={this.ActivityIndicatorLoadingView} startInLoadingState={true}
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
  
  searchcontainer : { 
    backgroundColor:'#fff'
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
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