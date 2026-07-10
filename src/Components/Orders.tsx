import React,{useEffect, useState} from "react";
import {View,Text,ScrollView,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {Ordersdata} from './Data';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
const Orders=()=>{
    const navigation=useNavigation();
    const [search,setsearch]=useState('');
    const [act,setact]=useState(false);
    const [data,setdata]=useState(Ordersdata);
    useEffect(()=>{
        let result=[...Ordersdata]
        if(search.length>0){
            result=result.filter(item=>{
                const b=[
                    item.Id?.toString(),
                    item.Name,
                    item.status,
                    item.stock?.toString(),
                ]
                return b.some(t=>t?.toLowerCase().includes(search.toLowerCase()))
            });
        };setdata(result);
    },[search])
    const colored=(item:string)=>{
        switch(item){
            case 'Pending':
                return '#facc15';
            case 'Shipped':
                return '#3b82f6';
            case 'Delivered':
                return '#22c55e';
            case 'Cancelled':
                return '#ef4444';
        }

    }
    return(
        <View style={styles.container}>
            <View style={[styles.searcher,act && {borderColor:'#006eff'}]}>
                <Feather name={'search'} style={{fontSize:30}}/>
                <TextInput
                    value={search}
                    onChangeText={setsearch}
                    placeholder="Search"
                    onFocus={()=>setact(true)}
                    style={{width:'80%',fontSize:17}}
                />
                {
                    search.length>0 &&
                    <TouchableOpacity
                        onPress={()=>setsearch('')}>
                        <Feather name={'x'} style={{fontSize:30}}/>
                    </TouchableOpacity>
                }
            </View>
            <ScrollView>
               {
                data.map((item,i)=>(
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('SelectedOrder',{data:item})}
                    key={i} style={styles.card}>
                        <View>
                        <View style={styles.top}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.headtext}>Order ID:</Text>
                                <Text style={styles.headbody}>{item.Id}</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={styles.headtext}>Quantity:</Text>
                                <Text style={styles.headbody}>{item.stock}</Text>
                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <View style={styles.textcontainer}>
                                <Text style={styles.headtext}>Department:</Text>
                                <Text style={styles.headbody}>{item.Department}</Text>
                            </View>
                            <View style={styles.textcontainer}>
                                <Text style={styles.headtext}>Status:</Text>
                                <Text style={[styles.headbody,{color:colored(item.status)}]}>{item.status}</Text>
                            </View>
                        </View>
                        <View 
                            style={{
                                backgroundColor:colored(item.status),
                                width:10,
                                height:'100%',
                                position:'absolute',
                                right:0,
                                borderTopRightRadius:10,
                                borderBottomRightRadius:10,
                            }}>
                        </View>
                        </View>
                    </TouchableOpacity>
                ))
               }
            </ScrollView>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    card:{
        borderWidth:1,
        borderColor:'#acacac',
        margin:10,
        elevation:5,
        backgroundColor:'#fff',
        borderRadius:10,
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textcontainer:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        width:'45%',
        paddingHorizontal:10,
        paddingVertical:5,
    },
    headtext:{
        fontSize:16,
        color:'#525252',
    },
    headbody:{
        fontSize:18,
        alignItems:'center',
        fontWeight:'bold',
    },
     searcher:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1.5,
        borderRadius:10,
        paddingHorizontal:10,
        gap:10,
        backgroundColor:'#fff',
        margin:10,
    },
});
export default Orders;