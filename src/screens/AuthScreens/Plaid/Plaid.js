import React, { useEffect, useState, useRef } from 'react';
import {
  Image, View, Text, TouchableOpacity, SafeAreaView, ScrollView,
  ImageBackground
} from 'react-native';

//////////////app images///////////
import { appImages } from '../../../constant/images';

////////////////app components//////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import { TogglePasswordVisibility } from '../../../utills/TogglePasswordVisibility';

/////////////////app pakages////////////////
import { TextInput, Snackbar } from 'react-native-paper';

//////////////app icons///////////////
import Feath from 'react-native-vector-icons/Feather';

///////////////////app pakages date time picker/////////////
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker';

////////////app styles//////////////
import Authstyles from '../../../utills/AuthSameStyles/Authstyles';
import AuthLastTextstyles from '../../../utills/AuthSameStyles/AuthLastText';
import AuthTextstyles from '../../../utills/AuthSameStyles/AuthTextstyles';
import AuthInputstyles from '../../../utills/AuthSameStyles/AuthInputstyles';
import styles from './styles';
import Colors from '../../../utills/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';
  import { PlaidLink, LinkSuccess, LinkExit } from 'react-native-plaid-link-sdk';

import { BASE_URL } from '../../../utills/ApiRootUrl';
import Lottie from 'lottie-react-native';


const Plaid = ({ navigation }) => {

  /////////TextInput References///////////
  const ref_input2 = useRef();
  const ref_input3 = useRef();

  //textfields
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  //button states
  const [loading, setloading] = useState(false);
  const [disable, setdisable] = useState(false);
  const [visible, setVisible] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({ value: '', color: '' });
  const onDismissSnackBar = () => setVisible(false);



  //password field
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    TogglePasswordVisibility();

  //email
  const handleValidEmail = (val) => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    if (reg.test(val)) {
      console.log('true')
      return true;
    }
    else {
      console.log('falsse')
      return false;
    }
  }


  //Api form validation
  const formValidation = async () => {
    // input validation
    if (Username == '') {
      setsnackbarValue({ value: "Please Enter Username", color: 'red' });
      setVisible('true');
    }
    else if (Email == '') {
      setsnackbarValue({ value: "Please Enter Email", color: 'red' });
      setVisible('true');
    }
    else if (!handleValidEmail(Email)) {
     
      setsnackbarValue({ value: "Incorrect Email", color: 'red' });
      setVisible('true');
    }
    else if (Password == '') {
      
      setsnackbarValue({ value: "Please Enter Password", color: 'red' });
      setVisible('true');
    }
    else {
      // navigation.navigate('SignupDetails', { Username, Password, Email })
      signupApi()
    }
  }


  ////////////////datetime picker states////////////////
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showyearwise, setshowyearwise] = useState(false);
  const [showdaywise, setshowdaywise] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    var d = new Date();
    d = selectedDate
    // console.log(d)
    //console.log(selectedDate)
    if (d != undefined) {
      let year = d.getFullYear();
      let month = (d.getMonth() + 1).toString().padStart(2, "0");
      let day = d.getDate().toString().padStart(2, "0");
      
      setshowyearwise(year + "-" + month + "-" + day)
      setshowdaywise(day + "-" + month + "-" + year)
      
      console('date',showyearwise)
    }

  }


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    // console.log('mode', mode)
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // signup api
  const signupApi = async () => {
    setdisable(true)
    setloading(true)
    var InsertAPIURL = BASE_URL+'/user/register.php';
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    var Data = {
      name: Username,
      dob: showdaywise,
      email: Email,
      password: Password,
    };
    await fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then(response => response.json())
      .then(response => {
        setdisable(false)
        setloading(false)
        console.log('response', response);
        if (response[0].error == true) {
          setsnackbarValue({ value: response[0].message, color: 'yellow' });
          setVisible('true');
          
        } 
        else if (response[0].error == false) {
          navigation.navigate('BottomTab')
        }
       })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {

  }, []);
  return (

    <SafeAreaView style={styles.container}>
        <ImageBackground source={appImages.plaidPage} resizeMode="contain" style={{
          justifyContent: "center",
          width: '100%',
          height: hp('50%'),
          marginTop: hp('-5%'),
         }}>
    </ImageBackground>
      <View style={{
        width: wp('100%'),
        alignSelf: 'center',
        marginTop: hp('-15%'),
        backgroundColor:' red',
        justifyContent: 'center',
        flexDirection: 'column',

      }}>
      <Lottie source={require('./check.json')} 
      style={{width:wp('23%'),height:hp('23%'),
    alignSelf:'center'
    // ,backgroundColor:'red'
    }}
      autoPlay loop />
      <Text
      style={{
        alignSelf:'center',
        fontSize:36,
        fontWeight:'bold',
        fontFamily:'Poppins-Bold',
        color : '#000EDD',
      }}
      >Welcome</Text>
      <Text
      style={{
        alignSelf:'center',
        fontSize:25,
        // fontWeight:'bold',
        fontFamily:'Poppins-Medium',
        color : '#2E2E2E',
        marginVertical:hp('2%')
      }}
      >Let the savings begin!</Text>
      <Text
      style={{
        alignSelf:'center',
        fontSize:17,
        fontFamily:'Poppins-Medium',
        color : '#707070',
      }}
      > Connect your bank account</Text>
      <Text
      style={{
        alignSelf:'center',
        fontSize:17,
        fontFamily:'Poppins-Medium',
        color : '#707070',
        marginTop:hp('-.5%')
      }}
      > And let us detect your subscriptions</Text>
     
     <View
     style={{
      alignSelf:'center',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
       backgroundColor:'#E4EEFA',
       padding:hp('.51%'),
        borderRadius:30,
        paddingHorizontal:wp('3%'),
        marginTop:hp('2%')
    }}
     >
       <Image
        style={{
          width:10,
          height:10,
        }}
        source={appImages.awesomeLock}
      />
 <Text
      style={{
        fontSize:9,
        fontFamily:'Poppins-Medium',
        color : '#000EDD',
        marginLeft:wp('1%')
      }}
      >Bank-level Encryption</Text>
     </View>
     
      </View>
      

      
      <PlaidLink
        tokenConfig={{
            token: "link-sandbox-d181c353-84a1-4e3e-ac4a-f14d87c201c5",
        }}
        onSuccess={(success) => { 
          console.log(success)
          navigation.navigate('BottomTab')
         }}
        onExit={(exit) => { navigation.navigate('BottomTab') }}
      >
        <Text
        style={{
          alignSelf:'center',
          marginTop:hp('5%'),
          backgroundColor:'#000EDD',
          width:wp('40%'),
          textAlign:'center',
          padding:hp('1%'),
          color:'#fff',
          fontFamily:'Poppins-SemiBold',
          fontSize:14,
          borderRadius:30
        }}
        >Connect</Text>
    </PlaidLink>
    </SafeAreaView>

  )
};

export default Plaid;