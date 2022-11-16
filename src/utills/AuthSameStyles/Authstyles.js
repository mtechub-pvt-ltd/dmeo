import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import Colors from '../Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';
  import { fontFamily } from '../../constant/fonts';

const Authstyles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center'
  },
  imageview:
  { 
       justifyContent: 'flex-end',
 alignItems:"flex-end",
 alignSelf:'flex-end'
//backgroundColor:"red"
},
image: {
  height:hp(20),
  width:wp(80),
},
imagetext:
{
  color: 'black',
  fontWeight: 'bold',
  fontSize: hp('2%'),
  textAlign:'center'
},
  inputview:
  {
    width: wp('90%'),
    height:wp('100%'),
    alignSelf: 'center',
    //backgroundColor: "white",
    alignContent:"center",
    //backgroundColor: "red",
  },
  inputeditable:{
    //marginTop:13,
    backgroundColor:'white',
    width: wp('84%'),
    marginLeft:'3%',
    fontSize:hp('1.5%'),
    fontWeight:'bold',
    color:'black',
},
  maintextview:
  {
    //justifyContent:'flex-start',
    alignSelf: 'center',
    //backgroundColor:'yellow'
  },
  maintext:
  {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('3.2%'),
    fontFamily: 'Raleway',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  subtext:
  {
    color: 'grey',
    fontWeight: '400',
    fontSize: hp('2%'),
    textAlign: 'center',
    width:wp('65%')
  },
  toptext:
  {
    color: 'black',
    //fontWeight: 'bold',
    fontSize: hp('3%'),
    marginTop: wp('5%'),
    textAlign:'center',
    fontFamily:fontFamily.Poppins_Medium
  },
  lasttextview:
  { 
    flexDirection: 'row',
     alignContent:'center',
    justifyContent:'center',
  bottom:wp(5),
  position:'absolute',
  alignSelf:'center'
   // backgroundColor:'red' 
  },
  lasttext:
  {
    color: 'black',
    fontWeight: '600',
    fontSize: hp('2%'),
  },
  lasttext1:
  {
    color: Colors.Appthemecolor,
    fontWeight: '600',
    fontSize: hp('2%'),
  },

});
export default Authstyles;
