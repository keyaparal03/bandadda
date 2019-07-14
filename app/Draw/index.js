import React, { Component } from "react";
import { Image, AsyncStorage } from "react-native";
import Storage from '@Utils/Storage';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  View,
  Card,
  CardItem,
  Picker
} from "native-base";
import CodePush from 'react-native-code-push';

import styles from "./Style";
import NavigationService from '@Service/Navigation';


const datas1 = [
  {
    icon : "home",
    type : "Entypo",
    name: "Logout",
    route: "SecondScreen",
  },
  {
    icon : "home",
    type : "Entypo",
    name: "Home Screen",
    route: "HomeScreen",
  },
  {
    icon : "images",
    type : "Entypo",
    name: "Collections",
    route: "DesignIdea",
  },
  



];


const datas2 = [
  {
    icon : "home",
    type : "Entypo",
    name: "Home Screen",
    route: "HomeScreen",
  },
  {
    icon : "login",
    type : "Entypo",
    name: "Login Screen",
    route: "LoginScreen",
  },
  {
    icon : "images",
    type : "Entypo",
    name: "Collections",
    route: "DesignIdea",
  }


];

class MenuLeft extends Component {
  constructor(props) {

     
    
    super(props);
    this.state = {
      hover: false,
      acount : '',
      category :''
    };
  }
  async componentDidMount(){
    let acount =  await Storage.get('userData');
    // alert(acount);
    console.log('userData', acount);
    this.setState({
      acount: acount,
    });
  }
  

   logoutn() {
    // let acount =  await Storage.set('userData',null);
    
    // this.setState({
    //   acount: acount,
    // });
    this.props.navigation.navigate("Home");
   
   }
   updateCategory= (category) => {
    alert(category)
    // const {category} = this.category;
      //send data to server
      // alert(search)
      if(category=='')
      {
        alert("Please Select category");
      }
      else{
        // alert("aa"+search)
        fetch('http://bandadda.com/wp-json/api/category',{
          method:'post',
          header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body:JSON.stringify({
            // we will pass our input data to server
            catid: 167
          })

        })
        .then((response)=>response.json())
          .then( async (responseJson)=>{
          
           alert("response"+responseJson)
           NavigationService.navigate("Category", { products : responseJson});
          
        })
        .catch((error)=>{
          alert("Something went wrong.Please try after some time.", error);
        })
      }
   }

  renderList(datas) {
  
    return (
        <Card  noShadow={true}style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 ,borderColor: '#fff'}}>
          
         {  
           datas.map(function(item, index){
            //  console.log("item"+item)
            //alert("item"+item.route)
            //  if (this.state.acount == null && item.route == "SecondScreen"){
              
            //  }
            if(item.route == 'SecondScreen'){
              return (
            
                <CardItem 
                  style={styles.linkStyle}
                  button onPress={() => {
                    
                    // alert();
                    Storage.set('userData',null);
                    // NavigationService.navigate("LoginScreen");
                    CodePush.restartApp();
                 }}       
                  >
                    <Icon name={item.icon} type={item.type}  color="#DC352F" style={{color:'#DC352F',marginLeft:20}}/>
                    <Text  style={styles.menutext} >{item.name}</Text>
                </CardItem>
              )
            }
            else{
              return (
            
                <CardItem 
                  style={styles.linkStyle}
                  button onPress={() =>{ NavigationService.navigate(item.route);}}
                  >
                    <Icon name={item.icon} type={item.type}  color="#DC352F" style={{color:'#DC352F',marginLeft:20}}/>
                    <Text  style={styles.menutext} >{item.name}</Text>
                </CardItem>
              )
            }
         
           })
          }
          </Card>
    )
  }
  render() {
   
    return (
      
      <Container  style={styles.drawerBg}>
        <Content
          bounces={false}
          style={{ flex: 1, top: -1 }}
          render
        >
          <View style={styles.logoWrapper}> 
            <Image source = {{uri:'https://www.bandadda.com/wp-content/uploads/2019/03/logo.jpg'}}  style={styles.logo}
          /></View>
          {/* <View><Text>Search</Text></View> */}
          <View style={styles.divider}>
            {
              this.state.acount ? 
              this.renderList(datas1)
              :
              this.renderList(datas2)
            }
            
          </View>
          <View>
          <Picker selectedValue = {this.state.category} onValueChange = {this.updateCategory}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>
          </View>
          {/* <View><Text>Copywrite</Text></View> */}

        </Content>
      </Container>
    );
  }
}     

export default MenuLeft;
