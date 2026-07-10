import React, { useState } from "react";
import {View,Text,ImageBackground,StyleSheet, TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Usersdata } from "./Data";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Signup=()=>{
    const navigation=useNavigation();
    const [user,setuser]=useState('');
    const [mail,setmail]=useState('');
    const [password,setpassword]=useState('');
    const [repassword,setrepassword]=useState('');
    const [input,setinput]=useState(0);
    const [data,setdata]=useState([])
    const authenticate=async()=>{
        const emailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        const passregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,13}$/;
        const found=await AsyncStorage.getItem('userdata');
        if(found){
            const b=JSON.parse(found);
            setdata(b)
        }
        const found1=data.find(t=>t.username===user);
        const found2=data.find(t=>t.mail===mail);
        if(!user || !mail|| !password || !repassword){
            Alert.alert('All fields are required!');
            
        }
        else if(password!==repassword){
            Alert.alert('Passwords Mismatch!');
           
        }
        else if(!emailregex.test(mail)){
            Alert.alert('Enter correct email Address!');
            
        }
        else if(!passregex.test(password)){
            Alert.alert("Password must include upper, lower, number & special character");

        }
        else if(found1){
            Alert.alert('User Already Exsists!')
        }
        else if(found2){
            Alert.alert('Mail Exsisted!')
        }
        const newUser={
            username:user,
            mail,
            password,
        }
        const c=[...data,newUser];
        //Usersdata.push(newUser);
        await AsyncStorage.setItem('userdata',JSON.stringify(c));
         Alert.alert('User Successfully Created!');
        navigation.navigate('Login');
        
    }
    return(
        <ImageBackground source={require('../Assets/background.jpg')} style={styles.container}>
            <View style={styles.topLeftCircle} />
            <View style={styles.bottomRightCircle} />
            <Text style={{fontWeight:'bold',fontSize:30,color:'#ff950aff',textAlign:'center',textShadowColor:'#1b1b1bcc',textShadowRadius:5}}>𝙲𝚛𝚎𝚊𝚝𝚎 𝙰𝚌𝚌𝚘𝚞𝚗𝚝</Text>
            <View style={{padding:15}}>
                <View style={styles.inputbox}>
                    <Text style={{fontSize:17,fontWeight:'bold'}}>Username</Text>
                    <View style={[styles.inputer,input===0 && {borderColor:'#1e92ffff'}]}>
                        <Icon name={'user-o'} style={styles.icon}/>
                        <TextInput
                            value={user}
                            onChangeText={setuser}
                            onFocus={()=>setinput(0)}
                            style={styles.inputer1}
                            placeholder="Username"
                            />
                    </View>
                </View>
                <View style={styles.inputbox}>
                    <Text style={{fontSize:17,fontWeight:'bold'}}>Mail</Text>
                    <View style={[styles.inputer,input===1 && {borderColor:'#1e92ffff'}]}>
                        <Feather name={'mail'} style={styles.icon}/>
                        <TextInput
                            value={mail}
                            onChangeText={setmail}
                            onFocus={()=>setinput(1)}
                            style={styles.inputer1}
                            placeholder="Mail"
                            />
                    </View>
                </View>
                <View style={styles.inputbox}>
                    <Text style={{fontSize:17,fontWeight:'bold'}}>Password</Text>
                    <View style={[styles.inputer,input===2 && {borderColor:'#1e92ffff'}]}>
                        <Feather name={'lock'} style={styles.icon}/>
                        <TextInput
                            value={password}
                            onChangeText={setpassword}
                            onFocus={()=>setinput(2)}
                            style={styles.inputer1}
                            placeholder="Password"
                            maxLength={13}
                            secureTextEntry
                        />
                    </View>
                </View>
                <View style={styles.inputbox}>
                    <Text style={{fontSize:17,fontWeight:'bold'}}>Re-enter Password</Text>
                    <View style={[styles.inputer,input===3 && {borderColor:'#1e92ffff'}]}>
                        <Feather name={'unlock'} style={styles.icon}/>
                        <TextInput
                            value={repassword}
                            onChangeText={setrepassword}
                            onFocus={()=>setinput(3)}
                            style={styles.inputer1}
                            placeholder="Re-enter Password"
                            maxLength={13}
                        />
                    </View>
                </View>
                <TouchableOpacity
                onPress={()=>authenticate()}>
                <LinearGradient
                    colors={['#ffbc2bff','#ff9268ff']}
                    start={{x:0,y:0}}
                    end={{x:1,y:0}}
                    style={{borderRadius:10,padding:10,alignItems:'center',marginTop:30,elevation:7}}>
                    <Text style={{fontWeight:'bold',fontSize:18,}}>Sign Up</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    inputbox:{
        paddingVertical:7,
    },
    inputer:{
        borderWidth:1.5,
        borderRadius:10,
        marginTop:3,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#c5c5c5ff',
        gap:10,
        paddingLeft:10,
        position:'relative',
        backgroundColor:'#fff',
        elevation:5,
    },
    icon:{
        fontSize:25,
        left:10,
        position:'absolute',
    },
    inputer1:{
        width:'100%',
        paddingLeft:40,
        fontSize:18,
    },
    topLeftCircle: {
    position: "absolute",
    top: -50, 
    left: -50,
    width: 200,
    height: 200,
    backgroundColor:'#ffbc2bff',
    elevation:20,
    shadowColor:'#ff0000ff',
    borderBottomRightRadius: 200,
  },
  bottomRightCircle: {
    position: "absolute",
    bottom: -50,
    right: -50,
    width: 200,
    height: 200,
    backgroundColor: "#FF6A00",
    elevation:20,
    borderTopLeftRadius: 200,
    shadowColor:'#ff7300ff',
  },
})
export default Signup;