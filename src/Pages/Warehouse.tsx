import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import { InventoryData,warehouse } from "./Inventory";
const Warehouse=()=>{
    return(
        <View>
            <Text>{warehouse}</Text>
        </View>
    );
}
const styles=StyleSheet.create({

});
export default Warehouse;