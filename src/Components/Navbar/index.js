import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


export default function Navbar(){
        return(
            
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({

    headerLogo: {
        marginHorizontal: 10
    },
    headerTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24
    },
    headerProfilePic: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginLeft: 225
    },

})
    
