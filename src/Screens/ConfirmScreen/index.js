import Slider from "@react-native-community/slider";
import React, {useState} from "react";
import { Button, TouchableOpacity } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import { Switch } from 'react-native-switch';
import ButtonNext from "../../Components/NextButton";

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

export default function ConfirmScreen(props){
    const height = props.route.params.height
    const weight = props.route.params.weight
    const name = props.route.params.name
    const age = props.route.params.age
    
    return(
        <SafeAreaView>
            <Container>
            <Main>
                <MainText>
                    <TextThanks adjustsFontSizeToFit={true}>
                        Ok, {name}. Pode confirmar sua ficha?
                    </TextThanks>
                    <Text adjustsFontSizeToFit={true}>
                        {name}
                    </Text>
                    <Text adjustsFontSizeToFit={true}>
                        {age} anos
                    </Text>
                    <Text adjustsFontSizeToFit={true}>
                        {height}{weight}
                    </Text>
                </MainText>
            </Main>
            <TouchableOpacity onPress={() => {props.navigation.push('MainScreen', {height: height, weight: weight, name: name, age: age})}}>
                <ButtonNext>
                    PRÓXIMO
                </ButtonNext>
            </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}