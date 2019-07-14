const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

  drawerBg: {
    // flex:1,
    // flexDirection: 'row',
    // alignItems: 'center',
    marginTop : 50,
    width : '100%', 
    backgroundColor: '#fff',
    // height: deviceHeight / 6,
    height: 500,
    
  },
  drawerImage: {
  
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 5,
    top: Platform.OS === "android" ? deviceHeight / 16 : deviceHeight / 13,
    resizeMode: "cover",
    
       
  },    
  drawerText: {
    position: "absolute",
    // left: Platform.OS === "android" ? deviceWidth / 3.5 : deviceWidth / 3.5,
     top: Platform.OS === "android" ? deviceHeight / 6 : deviceHeight / 6,
    textAlign: 'center',
    fontSize: 16,
    color: '#DC352F',
    fontFamily: 'Montserrat-SemiBold',
  },
  drawerTextSub: {
    position: "absolute",
    // left: Platform.OS === "android" ? deviceWidth / 3.5 : deviceWidth / 3.5,
     top: Platform.OS === "android" ? deviceHeight / 5 : deviceHeight / 5,
    textAlign: 'center',
    fontSize: 14,
    color: '#FFF',
    // fontFamily: 'Montserrat-SemiBold',
  },
  menutext: {
    fontWeight:'500',
    fontSize: 14,
    marginLeft: 30,
    color: '#661311',
    fontFamily: 'Montserrat-Regular',
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 18 : 18,
    fontWeight: "800",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined,
    justifyContent: "center",
  },
  divider: {
  
    paddingBottom: 20,
    marginBottom: 20
  },
  
  dividerNd: {
    // borderBottomWidth: 1,
    // borderColor: '#CCC',
    paddingBottom: 20,
    marginBottom: 20,
  },
  menulist:{
    marginVertical:1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    backgroundColor:'#DC352F',
    color : '#fff'
  },
  logoWrapper : {
    // backgroundColor:'#EAF1F3',
    paddingBottom:20,
    borderBottomWidth: 1,
    borderColor: '#EAF1F3',
  },
  linkStyle :{
    color: '#ed1212',
    marginVertical:1,
    borderBottomWidth: 1,
    cursor: 'pointer',
    borderColor: '#EAF1F3',
    border: 0,
    paddingLeft:20
    
  },

  logo : {
    width: 200,
    height: 50,
    marginBottom : 50,
    marginLeft : 30

  }
  
};
