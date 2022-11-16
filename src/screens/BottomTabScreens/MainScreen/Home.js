import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView, FlatList, StatusBar, TouchableWithoutFeedback,
  Image, View, Text, TouchableOpacity, ScrollView
} from 'react-native';

import { TouchableRipple } from 'react-native-paper';
//////////////////////app components///////////////
import HorizontalPosterCard from '../../../components/CustomCards/HorizontalPosterCard';
import VerticalPosterCard from '../../../components/CustomCards/VerticalPosterCard';

////////////////////redux////////////
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../../../redux/actions';

////////////////api////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

///////////////////arrays data///////////
import { HorizontalPoster, VerticalPoster } from '../../../model/mapData';


/////////////////////app styles////////////

import styles from './styles';
import Colors from '../../../utills/Colors';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Home = ({ navigation }) => {

  const { name, age } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  ///////////////date and time format//////////
  const [formatdate, setFormatDate] = useState()
  const [timespam, setTimeSpam] = useState()

  

  useEffect(() => {
  }, []);

  return (
    <View
      style={{
        flex: 1,
        //paddingHorizontal:wp(3)
      }}>
      

      <ScrollView
        contentContainerStyle={{
          
          flexDirection: 'column',
          // alignSelf: 'center',
          // width: responsiveWidth(100),
          justifyContent: 'space-between',
          

        }}>
       <View style={{ marginTop: hp(5),marginHorizontal: wp(5), marginBottom: hp(2) }}>
        <Text style={[styles.timespamtext,{
          fontSize: wp(5),
        }]}>Good Afternoon</Text>
        <Text style={styles.dateformattext}>Nov 10, 2022</Text>
      </View>
       <TouchableOpacity
       activeOpacity={1}
       onPress={() => 
      //   {
      //   console.log("hello")
      //  }       
        navigation.navigate('SliderScreen', {
          navplace: 'Home',
          navtype: 'HBOmax'
        })
      }
       style={{ marginTop: hp(1) }}>
        <Image source={require('../../../assets/images/card1.png')}
        style={{
          width: wp(100),
          height: hp(37),
          resizeMode: 'contain',
        }}
        />
        
      </TouchableOpacity>
       <TouchableOpacity 
       activeOpacity={1}
       onPress={() =>       
          navigation.navigate('SliderScreen', {
            navplace: 'Home',
            navtype: 'Netflix'
          })
        }
       style={{ paddingTop: hp(1),zIndex:9 }}>
        <Image source={require('../../../assets/images/card2.png')}
        style={{
          width: wp(100),
          height: hp(35),
          resizeMode: 'contain',
         
        }}
        />        
      </TouchableOpacity>
       <TouchableOpacity 
       activeOpacity={1}
       onPress={() =>       
        navigation.navigate('SliderScreen', {
          navplace: 'Home',
          navtype: 'Spotify'
        })
      }
       style={{ top: -150}}>
        <Image source={require('../../../assets/images/card3.png')}
        style={{
          width: wp(100),
          height: hp(130),
          resizeMode: 'contain',
          zIndex:-9
          
        }}
        />        
      </TouchableOpacity>
      
        <View
        style={{
          flexDirection: 'row',
          top: -720,
          alignItems: 'center',

        }}
        >
          <TouchableOpacity
          activeOpacity={1}
          onPress={() =>       
           navigation.navigate('SliderScreen', {
             navplace: 'Home',
             navtype: 'Youtube'
           })
         }
          >
          <Image source={require('../../../assets/images/card4.png')}
        style={{
          width: wp(50),
          // height: hp(50),
          resizeMode: 'contain',
          
        }}
        /> 
        </TouchableOpacity> 
        <TouchableOpacity
        activeOpacity={1}
        onPress={() =>       
         navigation.navigate('SliderScreen', {
           navplace: 'Home',
           navtype: 'Youtube'
         })
       }>
          <Image source={require('../../../assets/images/card5.png')}
        style={{
          width: wp(50),
          // height: hp(50),
          resizeMode: 'contain',
          
        }}
        />  
        </TouchableOpacity>
          {/* <Image source={require('../../../assets/images/card5.png')}
        style={{
          width: wp(50),
          height: hp(130),
          resizeMode: 'contain',
          
        }}
        />   */}


        </View>

     
      </ScrollView>
    </View>
    
  )
};

export default Home;