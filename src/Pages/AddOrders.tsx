import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-gesture-handler";

const warehouses = [
  { label: "Warehouse 1", value: 1 },
  { label: "Warehouse 2", value: 2 },
  { label: "Warehouse 3", value: 3 },
];

const departments = [
  { label: "Fashion", value: "Fashion" },
  { label: "Electronics", value: "Electronics" },
  { label:'Furniture',value:'Furniture'}, 
  { label:'Appliances',value:'Appliances'}, 
  { label:'Beauty',value:'Beauty'}, 
  { label:'Toys',value:'Toys'}, 
  { label:'Sports',value:'Sports'}, 
  { label:'Books',value:'Books'},
];

const categories = {
  Fashion: [
    { label: "Clothing", value: "Clothing" },
    { label: "Footwear", value: "Footwear" },
    { label: "Accessories", value: "Accessories" },
    { label: "Lingerie", value: "Lingerie" },
    { label: "Activewear", value: "Activewear" },
  ],
  Electronics: [
    { label: "Computers", value: "Computers" },
    { label: "Television", value: "Television" },
    { label: "Wearables", value: "Wearables" },
    { label: "Mobiles", value: "Mobiles" },
  ],
};
const subCategories = [
  {
    key: "Clothing",
    subcategories: [
      { label: "Tops", value: "Tops" },
      { label: "Bottoms", value: "Bottoms" },
      { label: "Dresses & Jumpsuits", value: "Dresses & Jumpsuits" },
      { label: "Outerwear", value: "Outerwear" },
      { label: "Activewear", value: "Activewear" },
    ],
  },
  {
    key: "Footwear",
    subcategories: [
      { label: "Sneakers", value: "Sneakers" },
      { label: "Boots", value: "Boots" },
      { label: "Sandals", value: "Sandals" },
      { label: "Formal Shoes", value: "Formal Shoes" },
      { label: "Heels & Flats", value: "Heels & Flats" },
    ],
  },
  {
    key: "Accessories",
    subcategories: [
      { label: "Bags & Wallets", value: "Bags & Wallets" },
      { label: "Belts", value: "Belts" },
      { label: "Hats & Caps", value: "Hats & Caps" },
      { label: "Scarves & Gloves", value: "Scarves & Gloves" },
      { label: "Sunglasses & Watches", value: "Sunglasses & Watches" },
      { label: "Jewelry", value: "Jewelry" },
    ],
  },
  {
    key: "Lingerie",
    subcategories: [
      { label: "Underwear", value: "Underwear" },
      { label: "Bras & Bralettes", value: "Bras & Bralettes" },
      { label: "Sleepwear / Nightwear", value: "Sleepwear / Nightwear" },
    ],
  },
  {
    key: "Swimwear",
    subcategories: [
      { label: "Bikinis", value: "Bikinis" },
      { label: "One-piece Swimsuits", value: "One-piece Swimsuits" },
      { label: "Beachwear", value: "Beachwear" },
    ],
  },
];

const AddOrders = () => {
  const [warehouse, setWarehouse] = useState(null);
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("");
  const [item, setitem]=useState('');
  const renderPicker = ({label,selectedValue,onChange,options,placeholder,disabled = false,}) => (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.selectcontainer, disabled && styles.disabled]}>
        <Picker
          selectedValue={selectedValue}
          enabled={!disabled}
          onValueChange={onChange}
        >
          <Picker.Item label={placeholder} value="" />
          {options.map((opt) => (
            <Picker.Item
              key={opt.value}
              label={opt.label}
              value={opt.value}
            />
          ))}
        </Picker>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {renderPicker({
          label: "Select Warehouse",
          selectedValue: warehouse,
          onChange: setWarehouse,
          options: warehouses,
          placeholder: "Choose Warehouse",
        })}

        {renderPicker({
          label: "Select Department",
          selectedValue: department,
          onChange: (val) => {
            setDepartment(val);
            setCategory("");
            setitem('');
          },
          options: departments,
          placeholder: "Choose Department",
        })}

        {department !== "" &&
          renderPicker({
            label: "Select Category",
            selectedValue: category,
            onChange: setCategory,
            options: categories[department] || [],
            placeholder: "Choose Category",
          })}
          {
            category!=='' &&
            <View>
                <Text style={styles.label}>Select Item</Text>
                <TextInput
                    value={item}
                    onChangeText={setitem}
                    placeholder="Enter Item"
                    style={[styles.selectcontainer,{padding:16,fontSize:17,}]}/>
            </View>
          }

      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scroll: {
    padding: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 6,
    color: "#333",
  },
  selectcontainer: {
    borderWidth: 1,
    borderColor: "#929292",
    borderRadius: 10,
    backgroundColor: "#fafafa",
    marginBottom: 16,
    overflow: "hidden",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default AddOrders;
