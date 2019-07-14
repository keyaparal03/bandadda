import React, {Component} from 'react';
import { Root } from "native-base";
import { Dimensions } from 'react-native';
import {  createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import NavigationService from '@Service/Navigation'
import HomeScreen from '@Screen/home';

import SecondScreen from '@Screen/SecondScreen';
import LoginScreen from '@Screen/LoginScreen';
import DesignIdea from '@Screen/DesignIdea';
import SplashScreen from '@Screen/SplashScreen';
import SearchScreen from '@Screen/SearchScreen';
import CategoryScreen from '@Screen/CategoryScreen';
import DrawerContent from '@Draw';


const deviceWidth = Dimensions.get("window").width;


const Drawer= createAppContainer(
  createDrawerNavigator(
    {
      Home : {
        screen : HomeScreen
      },
      Second : {
        screen : SecondScreen
      },
      Third : {
        screen : LoginScreen
      },
      DesignIdea : {
        screen : DesignIdea
      },
      Search: {
        screen :SearchScreen
      },
      Category:{
        screen : CategoryScreen
      }
    },
    {
      contentComponent: DrawerContent,
      contentOptions: {
      activeTintColor: "#e91e63"
      },
      // headerMode: "none",
      initialRouteName: "Home",
      drawerWidth: deviceWidth - 80,
    }
  )
);

const CreateStack= createAppContainer(
 
  createStackNavigator(
    {
      LoginScreen : {
        screen : LoginScreen
      }, 
      Drawer : {
        screen : Drawer
      },
      Search : {
        screen : SearchScreen
      },
      Category:{
        screen : CategoryScreen
      }
    },
    {
      headerMode: "none",
      initialRouteName: "Drawer"
    }
  )
);










export default class App extends Component {

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
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <Root>
       <CreateStack ref={(r) => {NavigationService.setTopLevelNavigator(r)}}/>
      </Root>
    );
  }
}


