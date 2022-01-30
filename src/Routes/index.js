import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../Screens/Home";
import LibsScreen from "../Screens/LibsScreen";
import AgeScreen from "../Screens/AgeScreen";
import Navbar from "../Components/Navbar";
import NameScreen from "../Screens/NameScreen";
import ConfirmScreen from "../Screens/ConfirmScreen";
import MainScreen from "../Screens/MainScreen";
import { StatusBar } from "expo-status-bar";

const Main = createNativeStackNavigator()

export default function Router(){
    return(
        <>
        <NavigationContainer>
            <Main.Navigator screenOptions={{contentStyle: {backgroundColor: "rgb(28,28,28)"}}}>
                <Main.Screen name='Home' component={Home} options={{ headerTitle: (props) => <Navbar {...props} />, headerShown: false}}/>
                <Main.Screen name='LibsScreen' component={LibsScreen} options={{headerTitle: '', headerTransparent: true, headerShadowVisible: false, headerTintColor: 'rgb(300, 300, 300)'}}/>
                <Main.Screen name='AgeScreen' component={AgeScreen} options={{headerTitle: '', headerTransparent: true, headerShadowVisible: false, headerTintColor: 'rgb(300, 300, 300)'}}/>
                <Main.Screen name='NameScreen' component={NameScreen} options={{headerTitle: '', headerTransparent: true, headerShadowVisible: false, headerTintColor: 'rgb(300, 300, 300)'}}/>
                <Main.Screen name='ConfirmScreen' component={ConfirmScreen} options={{headerTitle: '', headerTransparent: true, headerShadowVisible: false}}/>
                <Main.Screen name='MainScreen' component={MainScreen} options={{ headerTitle: (props) => <Navbar {...props} />, headerBackVisible: false, headerStyle: { backgroundColor: 'rgb(28,28,28)'} ,headerTintColor: 'rgb(300, 300, 300)'}}/>
            </Main.Navigator>
        </NavigationContainer>
        <StatusBar style="transparent"/>
        </>
    )
}