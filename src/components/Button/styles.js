import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
//////////app colors//////////
import Colors from '../../utills/Colors';

/////////////app fonts///////////
import { fontFamily } from '../../constant/fonts';

////////////styles pakage///////////
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container:
    {
alignSelf:'center',
    },
buttoncontent:
{
    height: hp('6.2%'),
    // width: wp('53%'),
    backgroundColor:Colors.Appthemecolor,
    padding:0,
    color:Colors.Appthemecolor
},
button:
{
    borderRadius:25,
    //margin:5,
    height: hp('6.2%'),
   // width: wp('53%'),
    alignItems:'center',
    backgroundColor:Colors.Appthemecolor,
},
label:
{
    color:'white',
    fontSize: hp('1.8%') ,
  fontFamily: fontFamily.Poppins_SemiBold,
    backgroundColor:Colors.Appthemecolor,
},
buttoncontent1:
{
    height: hp('6.2%'),
    padding:0,
    buttonColor:Colors.Appthemecolor
},
button1:
{
    borderRadius:25,
    height: hp('6.2%'),
    alignItems:'center',
    borderColor:Colors.Appthemecolor,
    //backgroundColor:Colors.Appthemecolor,
},
label1:
{
    color:'black',
    fontSize: hp('1.8%') ,
    fontWeight:'bold',
}
  });
  export default styles;
  