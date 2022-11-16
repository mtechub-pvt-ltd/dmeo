import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView,ScrollView,Image,
 View, Text, TouchableOpacity,
} from 'react-native';

/////////////////app components////////////////
import CustomHeader from '../../../components/CustomHeader/CustomHeader';

/////////////////////app pakages///////////////
import { TextInput, Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

/////////////app styles////////////////
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

//////////////////////////app api/////////////////////////
import axios from 'axios';
import { BASE_URL } from '../../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'

import { appImages } from '../../../constant/images';


const Privacy = ({ navigation }) => {


  return (

    <SafeAreaView style={styles.container}>
                 <CustomHeader
        screentitle={'Privacy'}
        navigation={() => navigation.goBack()}
      /> 
      <View style={styles.inputview}>
          <TouchableOpacity onPress={()=> navigation.navigate('Notifications',{navplace:'Auth'})}>
          <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:hp(2),
          //backgroundColor:'red',
        
        width:wp(75)}}>
          <Text style={styles.optiontext}>2 Factor Authentication</Text>
        <Ionicons
          name='chevron-forward'
          color={'#9F9F9F'}
          size={25}
          onPress={() => navigation.navigate('Notifications',{navplace:'Auth'})}

        />
          </View>
          </TouchableOpacity>

          <View style={styles.borderview}></View>
          <TouchableOpacity onPress={()=> navigation.navigate('Passcode')}>
          <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:hp(1),
          //backgroundColor:'red',
        
        width:wp(75)}}>
          <Text style={styles.optiontext}>Passcode</Text>
        <Ionicons
          name='chevron-forward'
          color={'#9F9F9F'}
          size={25}
          onPress={() => navigation.navigate('Passcode')}
       
        />
          </View>
          </TouchableOpacity>
          <View style={styles.borderview}></View>

                <TouchableOpacity onPress={()=> navigation.navigate('Notifications',{navplace:'Auth'})}>
                <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:hp(1),
          //backgroundColor:'red',
        
        width:wp(75)}}>
                <Text style={styles.optiontext}>Notifications</Text>
        <Ionicons
          name='chevron-forward'
          color={'#9F9F9F'}
          size={25}
          onPress={() => navigation.navigate('Notifications',{navplace:'Auth'})}
       
        />
          </View>
                </TouchableOpacity>

    
   
      </View>

    </SafeAreaView>
  )
};

export default Privacy;