import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import {Fontisto} from '@expo/vector-icons'
import {Svg, Circle} from 'react-native-svg'

import {
Text,
MainText,
TextThanks,
Main,
ButtonContainer,
SubMain,
TextHeight,
TextWeight,
Container
} from './styles'

export default function MainScreen(props){
    const height = props.route.params.height
    const weight = props.route.params.weight
    const name = props.route.params.name
    const age = props.route.params.age
    const [drinked, setDrinked] = useState(0)
    const handleDrink = () => {
        setDrinked(drinked + 250)
    }
    
    return(
        <SafeAreaView>
            <Container>
            <Main>
                <MainText>
                    <TextThanks adjustsFontSizeToFit={true}>
                        Você precisa tomar {(height * 35) - drinked}ml hoje.
                    </TextThanks>
                    <TextThanks adjustsFontSizeToFit={true}>
                            {drinked}ml tomados
                    </TextThanks>
                    
                </MainText>
                <TouchableOpacity style={{marginTop: '90%'}} onPress={handleDrink}>
                        <Fontisto
                        name='blood-drop'
                        size={32}
                        color='rgb(84, 162, 255)'
                        />
            </TouchableOpacity>
            </Main>
            </Container>
        </SafeAreaView>
    )
}