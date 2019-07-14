import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity,Keyboard,AsyncStorage,Image } from 'react-native';
import { Container,Content, Card,CardItem } from "native-base";
import NavigationService from '@Service/Navigation';
import { TextInput } from "react-native-gesture-handler";
import Storage from '@Utils/Storage';
import CodePush from 'react-native-code-push';

export default class SearchScreen extends Component {

  constructor(props) {
    super(props);
    // alert(this.props.navigation.getParam('searchData', null))
    this.state = {
     
      searchData: this.props.navigation.getParam('searchData', null),
      
    };

  }
  renderList(searchData) {
  
    return (
        <Card  noShadow={true}style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 ,borderColor: '#fff'}}>
          
         {  
           searchData.map(function(item, index){
           
              return (
            
                <CardItem 
                  style={styles.linkStyle}
                  >
                    <View style={styles.container}> 
                    <View> 
                      <Image source = {{uri:item.imageinfo.image}}  style={styles.product}
          />
                    </View>
                    <View>
                      <Text  style={styles.menutext} >{item.title}</Text>
                    </View>
                    <View>
                      <Text  style={styles.menutext} >Rs .{item.price}</Text>
                    </View>
                   
                    
                    </View>
                    
                </CardItem>
              )
         
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
         
         
          <View style={styles.divider}>
            {
             this.renderList(this.state.searchData)
            }
            
          </View>

        </Content>
      </Container>
    );
  }
}

const styles=StyleSheet.create({
  linkStyle :{
    // color: '#ed1212',
    marginVertical:1,
    borderBottomWidth: 1,
    borderColor: '#EAF1F3',
    paddingLeft:20,
    textAlign:"center"
    
  },
  maincontainer: {
    backgroundColor:'#fff'
  },
  product : {
    width: 300,
    height: 344,
    marginBottom : 50,
    flex:1,
    flexDirection: 'row'

  },
  container: {
    flex: 1,
    flexDirection: 'column',
    textAlign : "center"
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
  },
  menutext: {
    flex: 1,
    fontWeight:'500',
    fontSize: 14,
    marginLeft: 30,
    color: '#661311',
    fontFamily: 'Montserrat-Regular',
    flexDirection: 'row'
  },

});