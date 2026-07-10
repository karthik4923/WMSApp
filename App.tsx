import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/Components/Dashboard';
import Login from './src/Authentication/Login';
import Signup from './src/Authentication/Signup';
import Staff from './src/Pages/Staff';
import Warehouse from './src/Pages/Warehouse';
import AddOrders from './src/Pages/AddOrders';
import SelectedOrder from './src/Pages/SelectedOrder';
import ItemDetails from './src/Pages/ItemDetails';
const Stack=createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen name={'Login'} component={Login} options={{headerShown:false}}/>
        <Stack.Screen name={'Signup'} component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name={'Dashboard'} component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name={'Staff'} component={Staff} 
        options={{
          headerTitle:'Staff Details',
          headerShown:true,
          headerStyle:{
            backgroundColor:'#ffb380',
            elevation:10,
          }
          }}/>
          <Stack.Screen name={'Warehouse'} component={Warehouse} 
          options={{
          headerTitle:'Add Orders',
          headerShown:true,
          headerStyle:{
            backgroundColor:'#ffb380',
            elevation:10,
          }
          }}/>
          <Stack.Screen name='AddOrders' component={AddOrders}
          options={{
          headerTitle:'Add Orders',
          headerShown:true,
          headerStyle:{
            backgroundColor:'#ffb380',
            elevation:10,
          }
          }}/>
          <Stack.Screen name={'SelectedOrder'} component={SelectedOrder} options={{headerShown:false}}/>
          <Stack.Screen name={'ItemDetails'} component={ItemDetails} 
          options={{
            headerShown:true,
            headerTitle:'Details',
            headerStyle:{
              backgroundColor:'#ffb380',
             elevation:10,
            }}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
