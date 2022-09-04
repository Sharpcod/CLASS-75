import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
//import createBottomTabNavigator libray -Challenge 1
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

//Add the createBottomTabNavigator to the variable called tab-Challenge 2
const Tab =  createBottomTabNavigator();
export default class BottomTabNavigator extends Component {
  render() {
    return (
      //Add the code to move to the respective screen when tab is clicked-challenge 3
      <NavigationContainer>
        <Tab.Navigator>

         <Tab.Screen name="Transaction" Component={TransactionScreen}/>
         <Tab.Screen name="Search" Component={SearchScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
