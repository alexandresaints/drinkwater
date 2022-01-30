import Slider from "@react-native-community/slider";
import React, {useState} from "react";
import { TouchableOpacity } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import ButtonNext from "../../Components/NextButton";

import {
Text,
Main,
SubMain,
TextHeight,
Container,
MainText,
TextDetails,
TextAge
} from './styles'

export default function AgeScreen(props, {navigation}){
    const [age, setAge] = useState(0);
    const height = props.route.params.height
    const weight = props.route.params.touchable
    return(
        <SafeAreaView>
            <Container>
            <Main>
                <MainText>
                    <TextDetails adjustsFontSizeToFit={true}>
                        Seu peso é {height}{weight}, agora me diga,
                    </TextDetails>
                    <TextAge>Qual sua idade?</TextAge>
                    <TextHeight>{age} anos</TextHeight>
                </MainText>
            </Main>
            <SubMain>
            <Slider
                style={{width: 300, height: 40, alignSelf: 'center'}}
                value={age}
                onValueChange={value => setAge(value)}
                step={1}
                minimumValue={5}
                maximumValue={100}
                minimumTrackTintColor="#7e2fe2"
                maximumTrackTintColor="#999"
                thumbTintColor="#7e2fe2"
                />
            </SubMain>
            <TouchableOpacity onPress={() => {props.navigation.push('NameScreen', {height: height, weight: weight, age: age})}}>
                <ButtonNext>
                    PRÓXIMO
                </ButtonNext>
            </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}