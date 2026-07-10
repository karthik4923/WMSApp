import React from "react";
import {View,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
//@ts-ignore
import Icon6 from 'react-native-vector-icons/FontAwesome6';
//@ts-ignore
import Icon5 from 'react-native-vector-icons/FontAwesome5';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
//@ts-ignore
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
//@ts-ignore
import Simple from 'react-native-vector-icons/SimpleLineIcons';
//@ts-ignore
import Foundation from 'react-native-vector-icons/Foundation';
const Home=()=>{
    const navigation=useNavigation();
    return(
        <View style={styles.container}>
            <ScrollView
                style={styles.scroller}
                contentContainerStyle={{ paddingBottom: 150 }}
                showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.outerdash}>
                    <Icon name={'bar-chart-o'} style={[styles.icon,{color:'#0ea300'}]}/>
                    <View style={styles.text}>
                        <Text style={{fontWeight:'bold',fontSize:18}}>1.3Cr</Text>
                        <Text style={{color:'#797979'}}>Total Inventory Value</Text>
                    </View>
                    <Feather name={'chevron-right'} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outerdash}>
                    <Icon6 name={'cart-shopping'} style={[styles.icon]}/>
                    <View style={styles.text}> 
                        <Text style={{fontWeight:'bold',fontSize:18}}>323</Text>
                        <Text style={{color:'#797979'}}>Number of Active Orders</Text>
                    </View>
                    <Feather name={'chevron-right'} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outerdash}>
                    <Icon6 name={'truck-ramp-box'} style={[styles.icon,{color:'#12b4ff'}]}/>
                    <View style={styles.text}>
                        <Text style={{fontWeight:'bold',fontSize:18}}>200</Text>
                        <Text style={{color:'#797979'}}>Pending Shipments</Text>
                    </View>
                    <Feather name={'chevron-right'} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outerdash}>
                    <Foundation name={'alert'} style={[styles.icon,{color:'#e91b1bcc'}]}/>
                    <View style={styles.text}>
                        <Text style={{fontWeight:'bold',fontSize:18}}>Fashion Department</Text>
                        <Text style={{color:'#797979'}}>Lowest Stock Levels</Text>
                    </View>
                    <Feather name={'chevron-right'} style={styles.icon}/>
                </TouchableOpacity>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('AddOrders')}
                        style={styles.button}>
                        <View style={styles.buttonin}>
                            <Material name={'archive-plus-outline'} style={styles.icon1}/>
                            <Text style={styles.text1}>Add Orders</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}>
                        <View style={styles.buttonin}>
                            <Material name={'barcode-scan'} style={styles.icon1}/>
                            <Text style={styles.text1}>Barcode</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}>
                        <View style={styles.buttonin}>
                            <Simple name={'graph'} style={styles.icon1}/>
                            <Text style={styles.text1}>Reports</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Staff')}
                        style={styles.button}>
                        <View style={styles.buttonin}>
                            <Icon5 name={'users'} style={styles.icon1}/>
                            <Text style={styles.text1}>Staff</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Warehouse')}
                        style={styles.button}>
                        <View style={styles.buttonin}>
                            <Icon5 name={'warehouse'} style={styles.icon1}/>
                            <Text style={styles.text1}>Warehouse</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}>
                        <View style={styles.buttonin}>
                            <Icon6 name={'list-check'} style={styles.icon1}/>
                            <Text style={styles.text1}>Tasks</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    scroller:{
       flex:1,
    },
    outerdash:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10,
        marginHorizontal:15,
        borderWidth:1,
        borderColor:'#a3a3a3',
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:15,
        backgroundColor:'#fff',
        elevation:7,
    },
    icon:{
        fontSize:30,
    },
    icon1:{
        fontSize:34,
    },
    text:{
        width:'70%',
    },
    text1:{
        fontWeight:'bold',
    },
    buttons:{
        flexDirection:'row',
        flexWrap:'wrap',
        rowGap:'8%',
        columnGap:'5%',
        margin:23,
    },
    button:{
        borderWidth:2,
        width:'30%',
        borderRadius:10,
        backgroundColor:'#fff2e7',
        borderColor:'#ff8800',
    },
    buttonin:{
        alignItems:'center',
        padding:10,
    }
})
export default Home;