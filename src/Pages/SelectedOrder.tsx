import React from "react";
import {View,Text,ScrollView,StyleSheet,Image, TouchableOpacity} from 'react-native';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
const SelectedOrder=({route})=>{
    const navigation=useNavigation();
    const {data}=route.params || {};
    const formatinr=(amount:number,cur:string)=>{
        const a=new Intl.NumberFormat('en-IN',{
            currency:cur,
            style:'currency',
        }).format(amount)
        return a;
    };
    const formatedate=(date:any)=>{
        return new Date(date).toLocaleDateString('en-IN',{
            day:'2-digit',
            month:'short',
            year:'numeric',
        });
    };
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
    console.log(data.ordered_Date);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}>
                    <Feather name={'arrow-left'} style={{fontSize:30}}/>
                </TouchableOpacity>
                <Text style={{fontSize:20,fontWeight:'bold'}}>#{data.Id}</Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:10,}}
                style={styles.scrollcontainer}>
                <View style={[styles.innerheadcontainer,{flexDirection:'row'}]}>
                    <View style={styles.left}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>{data.Name}</Text>
                        <Text style={styles.headtxt}>{data.description}</Text>
                        <View style={styles.texter}>
                            <Text style={styles.headtxt}>Company :</Text>
                            <Text style={styles.bodytxt}>{data.company}</Text>
                        </View>
                        <View style={styles.texter}>
                            <Text style={styles.headtxt}>Stock Keeping Unit :</Text>
                            <Text style={styles.bodytxt}>{data.sku}</Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <Image source={data.Image} style={{width:'100%',height:160,borderRadius:10,borderWidth:1,borderColor:'#ccc',}} resizeMode='contain'/>
                    </View>
                </View>
                <Text style={{fontWeight:'bold',fontSize:18,}}>Order Details :</Text>
                <View style={styles.innerheadcontainer}>
                    {
                        data.sizes && 
                        <View style={{margin:5,}}>
                            <View style={{flexDirection:'row',borderWidth:1, backgroundColor: "#eee" }}>
                                <Text style={{ flex: 1,textAlign:'center' ,fontWeight: "bold",padding: 8,borderRightWidth:1}}>Sizes</Text>
                                <Text style={{ flex: 1 ,textAlign:'center',fontWeight: "bold",padding: 8,}}>Ordered Quantity</Text>
                            </View>
                            {
                                Object.entries(data.sizes).map(([key,value],index)=>(
                                    <View key={index} style={{flexDirection:'row', borderBottomWidth: 1,borderLeftWidth:1,borderRightWidth:1, }}>
                                        <Text style={{ flex: 1,textAlign:'center',borderRightWidth:1,padding: 8,}}>{key}</Text>
                                        <Text style={{ flex: 1,textAlign:'center',padding: 8,}}>{value}</Text>
                                    </View>
                                ))
                            }

                        </View>
                    }
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Depertment </Text>
                        <Text style={styles.bodytxt}>{data.Department}</Text>
                    </View>
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Category </Text>
                        <Text style={styles.bodytxt}>{data.category}</Text>
                    </View>
                    {
                        data.gender &&
                        <View style={styles.texter1}>
                            <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Gender </Text>
                            <Text style={styles.bodytxt}>{data.gender}</Text>
                        </View>

                    }
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Quantity </Text>
                        <Text style={styles.bodytxt}>{data.stock}</Text>
                    </View>
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Currency</Text>
                        <Text style={styles.bodytxt}>{data.currency}</Text>
                    </View>
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Price </Text>
                        <Text style={styles.bodytxt}>{formatinr(data.price,data.currency)}</Text>
                    </View>
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Discount </Text>
                        <Text style={styles.bodytxt}>{data.discount}%</Text>
                    </View>
                </View>
                <Text style={{fontWeight:'bold',fontSize:18,}}>Order Summary</Text>
                <View style={styles.innerheadcontainer}>
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Supplier</Text>
                        <Text style={styles.bodytxt}>{data.supplier}</Text>
                    </View>
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Ordered_Date</Text>
                        <Text style={styles.bodytxt}>{formatedate(data.ordered_Date)}</Text>
                    </View>
                     <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>GST</Text>
                        <Text style={styles.bodytxt}>{data.gst}%</Text>
                    </View>
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Transport Chargers</Text>
                        <Text style={styles.bodytxt}>{formatinr(data.charges,data.currency)}</Text>
                    </View>
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Deliver Warehouse</Text>
                        <Text style={styles.bodytxt}>{data.warehouse}</Text>
                    </View>
                    <View style={styles.texter1}>
                        <Text style={[styles.headtxt,{fontWeight:'bold'}]}>Status</Text>
                        <Text style={[styles.bodytxt,{color:colored(data.status)}]}>{data.status}</Text>
                    </View>
                </View>
                <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                    <Text style={{fontSize:20,textDecorationLine:'underline',textDecorationStyle:'dotted'}}>Total Amount :</Text>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                        {formatinr((data.price-(data.price*data.discount)/100)*data.stock+
                        data.charges+
                        ((data.price*data.gst)/100)*data.stock,data.currency)}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}>
                    <Text style={{fontWeight:'bold',color:'#fff',fontSize:18}}>Download Invoice</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        backgroundColor:'#ff9e5d',
        paddingTop:50,
        paddingBottom:10,
        paddingHorizontal:10,
    },
    scrollcontainer:{
        margin:10,
        borderWidth:1,
        padding:10,
        borderRadius:10,
        borderColor:'#bdbcbc',
        elevation:10,
        backgroundColor:'#fff',
    },
    innerheadcontainer:{
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#6d6d6d',
        marginVertical:5,
    },
    left:{
        width:'55%',
    },
    right:{
        width:'40%',
        padding:10,
    },
    texter:{
        paddingVertical:6,
    },
    texter1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:5,

    },
    headtxt:{
        color:'#6d6d6d',
        fontSize:16,
    },
    bodytxt:{
        fontWeight:'bold',
        fontSize:17,
    },
    button:{
        width:'100%',
        alignItems:'center',
        backgroundColor:'#0060df',
        padding:10,
        borderRadius:10,
        marginVertical:15,
        bottom:0,
    }
})
export default SelectedOrder;