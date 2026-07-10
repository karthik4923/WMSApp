import React,{useEffect, useState} from "react";
import {View,TextInput,TouchableOpacity,StyleSheet,ScrollView,Image,Text,Modal} from 'react-native';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
import {InventoryData} from '../Pages/Inventory';
import { useNavigation } from "@react-navigation/native";
const Inventory=()=>{
    const navigation=useNavigation();
    const [search,setsearch]=useState('');
    const [act,setact]=useState(true);
    const [data,setdata]=useState(InventoryData);
    const [page,setpage]=useState('Fashion');
    const [show,setshow]=useState(false);
    const changepage=(item:string)=>{
        setpage(item);
    }
    useEffect(()=>{
        const a=InventoryData.filter(item=>item.Department===page);
        setdata(a);
        if(search){
            const a1=a.filter(item=>{
                const s=[
                    item.Id?.toString(),
                    item.Name,
                    item.Brand,
                ]
                return s.some(t=>t.toLowerCase().includes(search.toLowerCase()));
            });
            setdata(a1);
        }
    },[page,search]);
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
            <View style={styles.filter}>
                <TouchableOpacity 
                    onPress={()=>{setshow(true)}}
                    style={[styles.filcont,{elevation:0,}]}>
                    <Image source={require('../Assets/Filter.png')} style={{height:20,width:40,}}/>
                    <Text style={[styles.txt]}>Filter</Text>
                    <Feather name={'chevron-down'} style={styles.icon}/>
                </TouchableOpacity>
                <View
                    style={styles.scrollcontainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.headscroller}>
                    <TouchableOpacity
                        onPress={()=>changepage('Fashion')}
                        style={[styles.filcont,page==='Fashion' && {backgroundColor:'#ff9e5d',borderColor:'#ffffff',elevation:0}]}>
                        <Text style={[styles.txt,page==='Fashion' && {color:'#fff',fontWeight:'bold'}]}>Fashion</Text>
                    </TouchableOpacity>
                     <TouchableOpacity
                        onPress={()=>changepage('Electronics')}
                        style={[styles.filcont,page==='Electronics' && {backgroundColor:'#ff9e5d',borderColor:'#ffffff'}]}>
                        <Text style={[styles.txt,page==='Electronics' && {color:'#fff',fontWeight:'bold'}]}>Electronics</Text>
                    </TouchableOpacity>
                     <TouchableOpacity
                        onPress={()=>changepage('Appliances')}
                        style={[styles.filcont,page==='Appliances' && {backgroundColor:'#ff9e5d',borderColor:'#ffffff'}]}>
                        <Text style={[styles.txt,page==='Appliances' && {color:'#fff',fontWeight:'bold'}]}>Appliances</Text>
                    </TouchableOpacity>
                     <TouchableOpacity
                        onPress={()=>changepage('Beauty')}
                        style={[styles.filcont,page==='Beauty' && {backgroundColor:'#ff9e5d',borderColor:'#ffffff'}]}>
                        <Text style={[styles.txt, page==='Beauty' && {color:'#fff',fontWeight:'bold'}]}>Beauty</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>changepage('Toys')}
                        style={[styles.filcont,page==='Toys' && {backgroundColor:'#ff9e5d',borderColor:'#ffffff'}]}>
                        <Text style={[styles.txt,page==='Toys' && {color:'#fff',fontWeight:'bold'}]}>Toys</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>changepage('Sports')}
                        style={[styles.filcont,page==='Sports' && {backgroundColor:'#ff9e5d',borderColor:'#ffffff'}]}>
                        <Text style={[styles.txt,page==='Sports' && {color:'#fff',fontWeight:'bold'}]}>Sports</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>changepage('Books')}
                        style={[styles.filcont,page==='Books' && {backgroundColor:'#ff9e5d',borderColor:'#ffffff'}]}>
                        <Text style={[styles.txt,page==='Books' && {color:'#fff',fontWeight:'bold'}]}>Books</Text>
                    </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:90}}>
                {
                    data.map((item,i)=>(
                        <View key={i} style={styles.card}>
                            <View style={styles.left}>
                                <Image source={item.Image} style={styles.image}/>
                            </View>
                            <View style={styles.right}>
                                <Text style={{fontWeight:'bold',fontSize:20}}>{item.Name}</Text>
                                <View style={styles.desccont}>
                                    <Text style={styles.head}>Id :</Text>
                                    <Text style={styles.desc}>{item.Id}</Text>
                                </View>
                                <View style={styles.desccont}>
                                    <Text style={styles.head}>SKU :</Text>
                                    <Text style={styles.desc}>{item.SKU}</Text>
                                </View>
                                <View style={styles.desccont}>
                                    <Text style={styles.head}>Category :</Text>
                                    <Text style={styles.desc}>{item.Category}</Text>
                                </View>
                                <View style={styles.desccont}>
                                    <Text style={styles.head}>Warehouse :</Text>
                                    <Text style={styles.desc}>{item.warehouseId}</Text>
                                </View>
                                <View style={styles.desccont}>
                                    <Text style={styles.head}>Price :</Text>
                                    <Text style={styles.desc}>₹{item.price}</Text>
                                </View>
                                    

                                </View>
                                <TouchableOpacity
                                        onPress={()=>{navigation.navigate('ItemDetails',{data:item})}}
                                        style={styles.button}>
                                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:18,}}>View</Text>
                                    </TouchableOpacity>
                            </View>
                    ))
                }
                <Modal
                    visible={show}
                    animationType="slide"
                    transparent
                    statusBarTranslucent={true}
                    onRequestClose={()=>setshow(false)}>
                        <TouchableOpacity 
                        onPress={()=>setshow(false)}
                        style={styles.alertcont}>
                        </TouchableOpacity>


                </Modal>
            </ScrollView>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
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
    filcont:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1.5,
        borderRadius:10,
        padding:7,
        marginRight:10,
        borderColor:'#ff8330',
        backgroundColor:'#fff',
        elevation:6,
    },
    txt:{
        fontSize:18,
    },
    icon:{
        fontSize:25,
    },
    filter:{
        flexDirection:'row',
        paddingHorizontal:10,
        marginVertical:10,
    },
    scrollcontainer:{
        width:'65%',
        paddingHorizontal:10,
        //borderWidth:1,
        //backgroundColor:'#fffdfd',
        borderRadius:10,
        borderColor:'#ff3d02',
    },
    headscroller:{
       marginHorizontal:5,
       paddingVertical:10,
    },
    card:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        borderRadius:10,
    },
    left:{
        width:'30%',
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:10,
    },
    right:{
        width:'67%',
        borderWidth:1,
        padding:10,
        borderRadius:10,
        borderColor:'#797979',
    },
    image:{
        width:'100%',
        height:200,
        borderRadius:10,
    },
    desccont:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    head:{
        fontSize:17,
        fontWeight:'500',
    },
    desc:{
        fontSize:17,
        fontWeight:'bold',
        color:'#a1a1a1',
    },
    button:{
        padding:10,
        backgroundColor:'#2289ff',
        borderRadius:10,
        position:'absolute',
        right:10,
        bottom:10,
    },
    alertcont:{
        position:'absolute',
        backgroundColor:'#00000056',
        top:0,
        left:0,
        right:0,
        bottom:0,
    }
});
export default Inventory;