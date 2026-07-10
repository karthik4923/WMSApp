import React, { useState,useRef, useEffect } from "react";
import {View,StyleSheet,Text,Animated, TouchableOpacity,Dimensions} from 'react-native';
//@ts-ignore
import Octicon from 'react-native-vector-icons/Octicons';
//@ts-ignore
import Icon6 from 'react-native-vector-icons/FontAwesome6';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
//@ts-ignore
import Fontisto from 'react-native-vector-icons/Fontisto';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "./Home";
import Orders from "./Orders";
import Shipments from "./Shipments";
import Inventory from "./Inventory";
import Account from "./Account";
import LinearGradient from "react-native-linear-gradient";

const Dashboard=()=>{
    const [page,setpage]=useState('Dashboard');
    const [i,seti]=useState(0);
    const translateX = useRef(new Animated.Value(0)).current;
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setScreenWidth(window.width);
            Animated.spring(translateX, {
                toValue: i * (window.width * 0.2),
                useNativeDriver: true,
            }).start();
        });
        return () => subscription?.remove();
    }, [i]);
    useEffect(()=>{
        Animated.spring(translateX,{
            toValue:i*(screenWidth * 0.2),
            useNativeDriver:true,
        }).start();
    },[i,screenWidth]);
    const render=()=>{
        switch(page){
            case 'Dashboard':
                return <Home/>
            case 'Orders':
                return <Orders/>
            case 'Shipments':
                return <Shipments/>
            case 'Inventory':
                return <Inventory/>
            case 'Account':
                return <Account/>
        }
    }
    const handleTabPress = (tab, index) => {
        setpage(tab);
        seti(index);
    };
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#ff9640','#ffca84']}
                start={{x:0,y:0}}
                end={{x:0,y:1}}
                style={styles.head}>
                    <Text style={{fontWeight:'bold',fontSize:20,textShadowRadius:1,textShadowColor:'#fc7a10'}}>{page}</Text>
                    <TouchableOpacity>
                         <Icon name={'bell-o'} style={styles.icon}/>
                    </TouchableOpacity>
            </LinearGradient>
            <View style={styles.middle}>
                {render()}
            </View>
            <View style={styles.navcontainer}>
                <TouchableOpacity 
                    onPress={()=> handleTabPress('Dashboard', 0)}
                    style={styles.navcard}>
                    <Ionicons name={page==='Dashboard'?'home-sharp':'home-outline'} style={[styles.icon,page==='Dashboard' && styles.acticon]}/>
                    <Text style={page==='Dashboard' && styles.acttxt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=> handleTabPress('Orders', 1)}
                    style={styles.navcard}>
                    <Icon6 name={'boxes-stacked'} style={[styles.icon,page==='Orders' && styles.acticon]}/>
                    <Text style={page==='Orders' && styles.acttxt}>Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>handleTabPress('Shipments', 2)}
                    style={styles.navcard}>
                    <Icon6 name={'truck-moving'} style={[styles.icon,page==='Shipments' && styles.acticon]}/>
                    <Text style={page==='Shipments' && styles.acttxt}>Shipments</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>handleTabPress('Inventory', 3)}
                    style={styles.navcard}>
                    <Fontisto name={'shopping-basket'} style={[styles.icon,page==='Inventory' && styles.acticon]}/>
                    <Text style={page==='Inventory' && styles.acttxt}>Inventory</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>handleTabPress('Account', 4)}
                    style={styles.navcard}>
                    <Icon name={'user-circle'} style={[styles.icon,page==='Account' && styles.acticon]}/>
                    <Text style={page==='Account' && styles.acttxt}>Account</Text>
                </TouchableOpacity>
            </View>
            <Animated.View
                style={[styles.line,{width:screenWidth * 0.2,transform:[{translateX}]}]}/>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    icon:{
        fontSize:30,
    },
    middle:{
        flex:1,
    },
    head:{
        paddingHorizontal:15,
        paddingTop:50,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#c24700',
        elevation:7,
        shadowColor:'#242424',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
    },
    navcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:15,
        alignItems:'center',
        backgroundColor:'#fff',
        borderTopWidth:0.5,
        elevation:10,
        shadowColor:'#222222ff',
        position:'absolute',
        bottom:0,
        zIndex:100,
    },
    navcard:{
        width:'20%',
        alignItems:'center',
    },
    line:{
        backgroundColor:'#eb4301ff',
        height:5,
        position:'absolute',
        bottom:0,
        borderRadius:10,
        zIndex:150,
        elevation:100,
        shadowColor:'#303030ff',
    },
    acttxt:{
        color:'#eb4301ff',
    },
    acticon:{
        color:'#eb4301ff',
    }
})
export default Dashboard;