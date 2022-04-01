import Slider from "@react-native-community/slider";
import React, {useState} from "react";
import { TouchableOpacity } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import ButtonNext from "../../Components/NextButton";
import { useAuth } from "../../Providers/auth";

import {
Main,
SubMain,
Container,
MainText,
TextDetails,
TextAge,
Input
} from './styles'

export default function NameScreen(props){
    const {name, setName} = useAuth()
    const height = props.route.params.height
    const weight = props.route.params.weight
    const age = props.route.params.age
    return(
        <SafeAreaView>
            <Container>
            <Main>
                <MainText>
                    <TextDetails adjustsFontSizeToFit={true}>
                        Olá, obrigado por me informar suas informações!
                    </TextDetails>
                    <TextAge>Como podemos te chamar?</TextAge>
                    <Input placeholder="Qual seu nome?" placeholderTextColor='rgb(173, 173, 173)' onChangeText={setName}/>
                </MainText>
            </Main>
            <SubMain>
            </SubMain>
            <TouchableOpacity onPress={() => {props.navigation.push('ConfirmScreen', {height: height, weight: weight, name: name, age: age})}}>
                <ButtonNext>
                    PRÓXIMO
                </ButtonNext>
            </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}