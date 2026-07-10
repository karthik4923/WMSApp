import React from "react";
import {View,Text, TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Account=()=>{
    const navigation=useNavigation();
    return(
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.replace('Login')}>
                    <Text style={styles.butext}>Logout</Text>
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
    button:{
        borderWidth:2,
        padding:10,
        alignItems:'center',
        borderColor:'#ff6600',
        margin:15,
        borderRadius:10,
        backgroundColor:'#fffbf7',
    },
    butext:{
        fontSize:18,
        color:'#ff6701',
        fontWeight:'bold',
    }
})
export default Account;