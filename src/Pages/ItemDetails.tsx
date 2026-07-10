import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { salarycalc } from "./Data";
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
const ItemDetails=({route})=>{
    const {data}=route.params || {};
    return(
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollcontainer}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styles.left}>
                        <Image source={data.Image} style={styles.image} resizeMode='contain'/>
                    </View>
                    <View style={styles.right}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>{data.Name}</Text>
                        <View style={styles.desccont}>
                            <Text style={styles.head}>Id :</Text>
                            <Text style={styles.desc}>{data.Id}</Text>
                        </View>
                        <View style={styles.desccont}>
                            <Text style={styles.head}>SKU :</Text>
                            <Text style={styles.desc}>{data.SKU}</Text>
                        </View>
                        <View style={styles.desccont}>
                            <Text style={styles.head}>Brand :</Text>
                            <Text style={styles.desc}>{data.Brand}</Text>
                        </View>
                        <View style={styles.desccont}>
                            <Text style={styles.head}>Department :</Text>
                            <Text style={styles.desc}>{data.Department}</Text>
                        </View>
                        <View style={styles.desccont}>
                            <Text style={styles.head}>Category :</Text>
                            <Text style={styles.desc}>{data.Category}</Text>
                        </View>
                        <View style={styles.desccont}>
                            <Text style={styles.head}>Subcategory :</Text>
                            <Text style={styles.desc}>{data.subcategory}</Text>
                        </View>
                        <View style={styles.desccont}>
                            <Text style={styles.head}>Sex :</Text>
                            <Text style={styles.desc}>{data.gender}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.header}>LOCATION DETAILS</Text>
                    <View style={{alignItems:'center',padding:10,}}>
                        <View style={styles.rowhead}>
                            <Text style={[styles.box1,{fontWeight:'bold'}]}>Aishle</Text>
                            <Text style={[styles.box1,{fontWeight:'bold'}]}>Row</Text>
                            <Text style={[styles.box1,{fontWeight:'bold'}]}>shelf</Text>
                        </View>
                        <View style={styles.rowbody}>
                            <Text style={styles.box}>{data.aisle}</Text>
                            <Text style={styles.box}>{data.row}</Text>
                            <Text style={styles.box}>{data.shelf}</Text>
                        </View>
                    </View>
                    <View style={styles.desccont}>
                        <Text style={styles.head}>Warehouse</Text>
                        <Text style={styles.desc}>{data.warehouseId}</Text>
                    </View>
                    <View style={styles.desccont}>
                        <Text style={styles.head}>Bin :</Text>
                        <Text style={styles.desc}>{data.bin}</Text>
                    </View>
                    <View style={styles.desccont}>
                        <Text style={styles.head}>Stock :</Text>
                        <Text style={styles.desc}>{data.stock}</Text>
                    </View>
                    <View style={styles.desccont}>
                        <Text style={styles.head}>Reserved :</Text>
                        <Text style={styles.desc}>{data.reserved}</Text>
                    </View>
                    <View style={styles.desccont}>
                        <Text style={styles.head}>Available :</Text>
                        <Text style={styles.desc}>{data.available}</Text>
                    </View>
                    <View style={styles.desccont}>
                        <Text style={styles.head}>Batch Number :</Text>
                        <Text style={styles.desc}>{data.batchNumber}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.header}>SUMMARY</Text>
                    <View style={styles.desccont1}>
                        <Text style={styles.head}>Currency :</Text>
                        <Text style={styles.desc}>{data.currency}</Text>
                    </View>
                    <View style={styles.desccont1}>
                        <Text style={styles.head}>Rating :</Text>
                        <View style={{flexDirection:'row',alignItems:'center',gap:10,}}>
                            <Icon name={'star'} style={{fontweight:'bold',fontSize:20,color:'#5bbd00'}}/>
                            <Text style={styles.desc}>{data.rating}</Text>
                        </View>
                    </View>
                    <View style={styles.desccont1}>
                        <Text style={styles.head}>Price :</Text>
                        <Text style={styles.desc}>{data.price}</Text>
                    </View>
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
    scrollcontainer:{
        margin:10,
        borderWidth:1,
        borderRadius:10,
        padding:10,
    },
    left:{
        width:'35%',
    },
    right:{
        width:'60%',
        justifyContent:'center',
    },
    image:{
        width:'100%',
        height:200,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#919191',
    },
    desccont:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
     desccont1:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        gap:10,
    },
    head:{
        fontSize:17,
        fontWeight:'bold',
    },
    desc:{
        fontSize:17,
        fontWeight:'bold',
        color:'#888888',
    },
    rowhead:{
        flexDirection:'row',
        backgroundColor:'#ebeaea',
    },
    rowbody:{
        flexDirection:'row',
    },
    box:{
        padding:6,
        width:100,
        textAlign:'center',
        borderWidth:1,
        fontSize:16,
    },
    box1:{
        padding:6,
        width:100,
        textAlign:'center',
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
    },
    header:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        borderBottomWidth:1,
        marginVertical:7,
    }
});

export default ItemDetails;