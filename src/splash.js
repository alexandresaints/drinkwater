import React from "react";
import LottieView from 'lottie-react-native';

import {View, Text} from 'react-native'

export default function Splash(){
    return(
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <LottieView
                source={require('../assets/splashh.json')}
                autoPlay
                loop 
             />
        </View>
    )
}