import React, { useEffect, useState } from "react";
import {View,Text,TextInput, TouchableOpacity,StyleSheet,Image,ImageBackground,Modal} from 'react-native';
import {Usersdata} from './Data';
//@ts-ignore
import Fontisto from 'react-native-vector-icons/Fontisto';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login=()=>{
    const navigation=useNavigation();
    const [User,setUser]=useState('');
    const [Password,setPassword]=useState('');
    const [show,setshow]=useState(true);
    const [input,setinput]=useState(0);
    const [valid,setvalid]=useState(false);
    const [allusers,setallusers]=useState([...Usersdata]);
    useEffect(()=>{
        const authn=async()=>{
            const found = await AsyncStorage.getItem('userdata');
            if (found) {
                const a = JSON.parse(found);
                setallusers(prev => [...prev, ...a]);
            }
        };authn();
    }, []);
    console.log(allusers);
    const authenticate=async()=>{
        if(allusers.find(t=>(t.username===User || t.mail===User) && (t.password===Password))){
            navigation.replace('Dashboard');
        }else{
            setUser('');
            setPassword('');
            setinput(0);
            setvalid(true);
        }
    }
    return(
        <ImageBackground source={require('../Assets/background.jpg')} style={styles.container}>
            <View style={{alignItems:'center'}}>
                <Image source={require('../Assets/Focus_Logo1.png')}/>
            </View>
            <View style={styles.inner}>
            <View style={styles.inputbox}>
                <Text style={{fontSize:17,fontWeight:'bold'}}>Username</Text>
                <View style={[styles.inputer,input===0 && {borderColor:'#1e92ffff'}]}>
                    <Icon name={'user'} style={styles.icon}/>
                    <TextInput
                    value={User}
                    onChangeText={setUser}
                    placeholder="Username or Email"
                    onFocus={()=>setinput(0)}
                    style={{fontSize:16,width:'90%',}}/>
                </View>
            </View>
            <View style={styles.inputbox}>
                <Text style={{fontSize:17,fontWeight:'bold'}}>Password</Text>
                <View style={[styles.inputer,input===1 && {borderColor:'#1e92ffff'}]}>
                    <Icon name={'lock'} style={styles.icon}/>
                    <TextInput
                    value={Password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    onFocus={()=>setinput(1)}
                    secureTextEntry={show}
                    style={{fontSize:16,width:'90%',}}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',padding:5,}}>
                <TouchableOpacity
                    onPress={()=>setshow(!show)}
                    style={{width:'10%'}}>
                    <Fontisto name={show===true?'checkbox-passive':'checkbox-active'} style={{fontSize:20,color:'#424242ff'}}/>
                </TouchableOpacity>
                <Text>Show Password</Text>
            </View>
            <View style={{flexDirection:'row',padding:10,alignItems:'center',gap:10,}}>
                <Text style={{fontSize:17}}>Don't have Account</Text>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{color:'#0053cfff',fontWeight:'bold',fontSize:17,textDecorationLine:'underline'}}>Sign up?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={()=>authenticate()}>
                <LinearGradient
                colors={['#ffbc2bff','#ff9268ff']}
                start={{x:0,y:0}}
                end={{x:1,y:0}}
                style={{borderRadius:10,padding:10,alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,}}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
            {
                valid && 
                <Modal
                    transparent
                    animationType="fade"
                    statusBarTranslucent={true}>
                        <View style={styles.overlay}>
                        <View style={{backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderRadius:10,width:'50%'}}>
                            <Text style={{fontSize:20,fontWeight:'bold',padding:10,}}>Invalid Credientials!</Text>
                            <TouchableOpacity
                                style={{backgroundColor:'#5ca8ffff',width:'90%',borderRadius:10,padding:10,margin:10,}}
                                onPress={()=>setvalid(false)}>
                                <Text style={{color:'white',fontWeight:'bold',fontSize:20,textAlign:'center'}}>OK</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                </Modal>
            }
        </ImageBackground>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    inner:{
        padding:15,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
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
        backgroundColor:'#ffffffff'
    },
    icon:{
        fontSize:25,
    }
});
export default Login;