import React, { useEffect, useState } from "react";
import {View,ScrollView,Text,TextInput,StyleSheet,Image, TouchableOpacity,Modal} from 'react-native';
import {warehouseData,salarycalc,uniqueroles,uniquewarehouse} from './Data';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import Icon5 from 'react-native-vector-icons/FontAwesome5';
const Staff=()=>{
    const [data,setdata]=useState(warehouseData);
    const [search,setsearch]=useState('');
    const [act,setact]=useState(false);
    const [sortby,setsortby]=useState([]);
    const [filter,setfilter]=useState(false);
    const [fititem,setfilitem]=useState('Desgination');
    const [fildata,setfildata]=useState(uniqueroles);
    const data1=['Desgination','Warehouse'];
    const [items,setitems]=useState([]);
    const [warehouse,setwarehouse]=useState([]);
    const [role,setrole]=useState([]);
    const [opensort,setopensort]=useState(false);
    useEffect(()=>{
        if(sortby.length===0 && items.length===0){
            setTimeout(() => {
                setdata([...warehouseData]);
            }, 200);
        }
    },[sortby]);
    useEffect(() => {
        let result = [...warehouseData];
        if (search) {
            result = result.filter(item => {
                const b = [
                    item.name,
                    item.role,
                    item.warehouse?.toString(),
                    item.mail,
                    item.mobile?.toString(),
                    item.salary?.toString(),
                ];
                return b.some(t =>t?.toLowerCase().includes(search.toLowerCase()));
            });
        };setdata(result)
  }, [search]);
  const filchanger=(item:string)=>{
    setfilitem(item);
    if(item==='Desgination'){
        setfildata(uniqueroles);
    };
    if(item==='Warehouse'){
        setfildata(uniquewarehouse);
    };
  }
  const filtered=(item:any)=>{
    if(fititem==='Warehouse'){
        if(warehouse.includes(item)){
            const a=warehouse.filter(i=>i!==item);
            setwarehouse(a);
            setitems(a);
        }else{
            setwarehouse([...warehouse,item]);
            setitems([...items,item])
        }
    }
    if(fititem==='Desgination'){
        if(role.includes(item)){
            const a=role.filter(i=>i!==item);
            setrole(a);
            setitems(a);
        }else{
            setrole([...role,item]);
            setitems([...items,item]);
        }
    }
  };
  console.log(role[0])
  const applychanges=()=>{
    let result=[...warehouseData];
    if(warehouse.length>0){
        result=result.filter(t=>
            warehouse.some(w=>w===t.warehouse.toString())
        );
    }
    if(role.length>0){
        result=result.filter(t=>
            role.some(r=>r===t.role)
        );
    }
    setdata(result);
    setfilter(false);
  };
    const close=()=>{
        setitems([]);
        setdata([...warehouseData]);
        setrole([]);
        setwarehouse([]);
        setfilter(false);
    };
    useEffect(()=>{
        let result=[...data];
        if(sortby.includes('Salarydec')){
            result.sort((a,b)=>b.salary-a.salary);
        };
        if(sortby.includes('Warehousein')){
            result.sort((a,b)=>String(a.warehouse).localeCompare(String(b.warehouse)));
        };
        if(sortby.includes('Salaryin')){
            result.sort((a,b)=>a.salary-b.salary);
        };
        if(sortby.includes('Warehousedec')){
            result.sort((a,b)=>String(b.warehouse).localeCompare(String(a.warehouse)));
        }
        setdata(result);
    },[sortby]);
    
    const toogler=(item:string)=>{
        console.log(item);
        if(sortby.includes(item)){
            const a=sortby.filter(i=>i!==item);
            setsortby(a);
        }
        else{
            setsortby([...sortby,item]);
        }
    };
    const [sortedby,setsortedby]=useState('Warehouse');
    const savesort = (item: string) => {
        const d = sortedby + item;
        const opposite =
              item === 'in'? sortedby + 'dec'
            : item === 'dec'? sortedby + 'in'
            : '';

        setsortby(prev => {
            let updated = prev.filter(i => i !== d && i !== opposite);
            if (!prev.includes(d)) {
                updated = [...updated, d];
            }
        return updated;
        });
    };

    return(
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <View style={[styles.searcher,act && {borderColor:'#006eff'}]}>
                    <Feather name={'search'} style={{fontSize:30}}/>
                    <TextInput
                        value={search}
                        onChangeText={setsearch}
                        placeholder="Search"
                        onFocus={()=>setact(true)}
                        style={{width:'90%',fontSize:17}}
                    />
                </View>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.filter}>
                    <TouchableOpacity 
                        onPress={()=>{setfilter(true)}}
                        style={[styles.filcont,items.length>0 && {backgroundColor:'#ff9e5d',borderColor:'#ffffff'}]}>
                        <Image source={require('../Assets/Filter.png')} style={{height:20,width:40,}}/>
                        <Text style={[styles.txt,items.length>0 && {color:'#fff',fontWeight:'bold'}]}>Filter</Text>
                        <Feather name={'chevron-down'} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>setopensort(true)}
                        style={[styles.filcont,sortby.length>0 && {backgroundColor:'#ff9e5d',borderColor:'#ffffff'}]}>
                        <Text style={[styles.txt,sortby.length>0 && {color:'#fff',fontWeight:'bold'}]}>SortBy</Text>
                        <Feather name={'chevron-down'} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>toogler('Warehousein')}
                        style={[styles.filcont,sortby.includes('Warehousein') && {backgroundColor:'#ff9e5d',borderColor:'#ffffff'}]}>
                        <Text style={[styles.txt,sortby.includes('Warehousein') && {color:'#fff',fontWeight:'bold'}]}>Warehouse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>toogler('Salarydec')}
                        style={[styles.filcont,sortby.includes('Salarydec') && {backgroundColor:'#ff9e5d',borderColor:'#ffffff'}]}>
                        <Text style={[styles.txt,sortby.includes('Salarydec') && {color:'#fff',fontWeight:'bold'}]}>Salary</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                {
                    data.map((item,i)=>(
                        <View key={i} style={styles.card}>
                            <View style={styles.cardinside2}>
                                <View style={styles.cardinside3}>
                                    <Feather name={'user'} style={styles.icon1}/>
                                    <Text style={styles.headtxt}>Name: </Text>
                                </View>
                                <Text style={styles.desctxt}>{item.name}</Text>
                            </View>
                            <View style={styles.cardinside2}>
                                <View style={styles.cardinside3}>
                                    <Icon name={'id-badge'} style={[styles.icon1,{color:'#00a800'}]}/>
                                    <Text style={styles.headtxt}>Designation: </Text>
                                </View>
                                <Text style={styles.desctxt}>{item.role}</Text>
                            </View>
                            <View style={styles.cardinside2}>
                                <View style={styles.cardinside3}>
                                    <Feather name={'mail'} style={[styles.icon1,{color:'#d60202'}]}/>
                                    <Text style={styles.headtxt}>Mail: </Text>
                                </View>     
                                <Text style={styles.desctxt}>{item.mail}</Text>
                            </View>
                            <View style={styles.cardinside2}>
                                <View style={styles.cardinside3}>
                                    <Icon5 name={'mobile-alt'} style={styles.icon1}/>
                                    <Text style={styles.headtxt}>Mobile: </Text>
                                </View>
                                <Text style={styles.desctxt}>{item.mobile}</Text>
                            </View>
                            <View style={styles.cardinside1}>
                                <View style={styles.cardinside2}>
                                    <View style={styles.cardinside3}>
                                        <Icon name={'rupee'} style={styles.icon1}/>
                                        <Text style={styles.headtxt}>Salary: </Text>
                                    </View>
                                    <Text style={styles.desctxt}>{salarycalc(item.salary)}</Text>
                                </View>
                                <View style={styles.cardinside2}>
                                    <View style={styles.cardinside3}>
                                        <Icon5 name={'warehouse'} style={[styles.icon1,{color:'#026fd6'}]}/>
                                        <Text style={styles.headtxt}>Warehouse: </Text>
                                    </View>
                                    <Text style={styles.desctxt}>{item.warehouse}</Text>
                                </View>
                            </View>
                        </View>
                    ))
                }

            </ScrollView>
            <Modal
                visible={filter}
                transparent
                animationType="slide"
                statusBarTranslucent={true}
                onRequestClose={()=>setfilter(false)}>
                    <TouchableOpacity
                     activeOpacity={1}
                     onPress={()=>setfilter(false)}
                     style={styles.overlay}>
                        <TouchableOpacity 
                            activeOpacity={1}
                            onPress={()=>{}}
                            style={styles.filtcontainer}>
        
                            <View style={styles.head}>
                                <Text style={styles.filhead}>Filter by</Text>
                                <TouchableOpacity
                                    onPress={close}>
                                    <Feather name={'x'} style={{fontSize:30,color:'#fff',fontWeight:'bold'}}/>
                                </TouchableOpacity>
                            </View>
                           
                            <View style={styles.filtcontainer1}>
                                <View style={styles.left}>
                                {
                                    data1.map((item,i)=>(
                                        <TouchableOpacity
                                            style={{borderTopRightRadius:20,borderBottomEndRadius:20,backgroundColor:'#000000',}}
                                            onPress={()=>filchanger(item)}
                                            key={i}>
                                            <Text style={[styles.filtxt,{textAlign:'center'},fititem===item && styles.act]}>{item}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                                </View>
                                <View style={styles.right}>
                                {
                                    fildata.map((item,i)=>(
                                        <TouchableOpacity
                                            onPress={()=>filtered(item)}
                                            key={i}>
                                            <View style={{flexDirection:'row',gap:10,alignItems:'center',}}>
                                                <Icon name={items.includes(item)?'check-square':'square-o'} 
                                                style={[{color:'#fff',fontSize:25,fontweight:'bold',width:20},items.includes(item) && {color:'#ff4800',backgroundcolor:'#ccc'}]}/>
                                                <Text style={styles.filtxt}>{item}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }

                                </View>
                                
                            </View>
                           
                            <View style={styles.bottom}>
                                <TouchableOpacity
                                    onPress={()=>{setitems([]);setrole([]);setwarehouse([]);}}
                                    style={{width:'40%',padding:10,alignItems:'center',}}>
                                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:25,textDecorationLine:'underline',textDecorationStyle:'dotted',}}>clear all</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>{applychanges()}}
                                    style={{backgroundColor:'#007fd3',width:'40%',padding:10,alignItems:'center',borderRadius:20,}}>
                                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:25,}}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
            </Modal>
            <Modal
                 visible={opensort}
                transparent
                animationType="slide"
                statusBarTranslucent={true}
                onRequestClose={()=>setopensort(false)}>
                    <TouchableOpacity
                     activeOpacity={1}
                     onPress={()=>setopensort(false)}
                     style={styles.overlay}>
                        <TouchableOpacity
                        style={styles.filtcontainer}
                        onPress={()=>{}}>
                            <View style={styles.head}>
                                <Text style={styles.filhead}>Sort by</Text>
                                <TouchableOpacity
                                    onPress={()=>setopensort(false)}>
                                    <Feather name={'x'} style={{fontSize:30,color:'#fff',fontWeight:'bold'}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.filtcontainer1}>
                                <View style={styles.left}>
                                    <TouchableOpacity
                                        onPress={()=>setsortedby('Warehouse')}>
                                        <Text style={[styles.filtxt,{textAlign:'center'},sortedby==='Warehouse' && styles.act]}>Warehouse</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={()=>setsortedby('Salary')}>
                                        <Text style={[styles.filtxt,{textAlign:'center'},sortedby==='Salary' && styles.act]}>Salary</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.right}>
                                    <TouchableOpacity
                                        style={{flexDirection:'row',alignItems:'center',gap:10,}}
                                        onPress={()=>savesort('in')}>
                                         <Icon name={sortby.includes(sortedby+'in')?'check-square':'square-o'} 
                                         style={[{color:'#fff',fontSize:25,fontweight:'bold',width:20},sortby.includes(sortedby+'in') && {color:'#ff4800',backgroundcolor:'#ccc'}]}/>
                                         <Text style={styles.filtxt}>Increase</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{flexDirection:'row',alignItems:'center',gap:10,}}
                                        onPress={()=>savesort('dec')}>
                                        <Icon name={sortby.includes(sortedby+'dec')?'check-square':'square-o'} 
                                        style={[{color:'#fff',fontSize:25,fontweight:'bold',width:20},sortby.includes(sortedby+'dec') && {color:'#ff4800',backgroundcolor:'#ccc'}]}/>
                                        <Text style={styles.filtxt}>Decrease</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                             <View style={styles.bottom}>
                                <TouchableOpacity
                                    onPress={()=>{setsortby([])}}
                                    style={{width:'40%',padding:10,alignItems:'center',}}>
                                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:25,textDecorationLine:'underline',textDecorationStyle:'dotted',}}>clear all</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>{setopensort(false)}}
                                    style={{backgroundColor:'#007fd3',width:'40%',padding:10,alignItems:'center',borderRadius:20,}}>
                                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:25,}}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                     </TouchableOpacity>
            </Modal>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    innercontainer:{
        gap:15,
        borderBottomWidth:1.5,
        borderColor:'#ff8330',
        padding:15,
        backgroundColor:'#fffaf7',
    },
    searcher:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1.5,
        borderRadius:10,
        paddingHorizontal:10,
        gap:10,
        backgroundColor:'#fff',
    },
    filter:{
        flexDirection:'row',
    },
    filcont:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1.5,
        borderRadius:10,
        padding:10,
        justifyContent:'center',
        marginRight:10,
        borderColor:'#ff8330',
        backgroundColor:'#fff',
    },
    txt:{
        fontSize:18,
    },
    icon:{
        fontSize:25,
    },
    card:{
        borderWidth:1,
        borderColor:'#ccc',
        padding:10,
        margin:10,
        borderRadius:10,
        elevation:10,
        backgroundColor:'#fff',
    },
    cardinside1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    cardinside2:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
        justifyContent:'space-between',
    },
    cardinside3:{
        flexDirection:'row',
        alignItems:'center',
    },
    icon1:{
        fontSize:25,
        width:45,
        textAlign:'center',
    },
    headtxt:{
        fontWeight:'bold',
        fontSize:17,
        color:'#858585',
        fontFamily: 'Times New Roman',
    },
    desctxt:{
        fontWeight:'bold',
        fontSize:17,
    },
    overlay:{
        backgroundColor:'#0202029f',
        position:'absolute',
        flex:1,
        top:0,
        bottom:0,
        left:0,
        right:0,
    },
    filtcontainer:{
        backgroundColor:'#000000',
        width:'100%',
        height:'60%',
        position:'absolute',
        bottom:0,
    },
    filtcontainer1:{
        flexDirection:'row',
        flex:1,
        marginTop:10,
    },
    left:{
        width:'40%',
        borderRadius:20,
        backgroundColor:'#000000',
        
    },
    right:{
        width:'60%',
        backgroundColor:'#444444',
        paddingVertical:10,
        paddingHorizontal:15,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    head:{
        justifyContent:'space-between',
        flexDirection:'row',
        borderBottomColor:'#fff',
        borderBottomWidth:1.5,
        fontWeight:'bold',
        padding:10,
        alignItems:'center',
    },
    filhead:{
        color:'#fff',
        fontSize:23,
        fontWeight:'bold',
    },
    filtxt:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        paddingVertical:5,
    },
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
    },
    act:{
        backgroundColor:'#444444',
        borderRadius:0,
    }
})
export default Staff;