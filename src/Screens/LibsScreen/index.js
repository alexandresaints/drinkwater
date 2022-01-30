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

export default function LibsScreen({navigation}){
    const [height, setHeight] = useState(30);
    const [touchable, setTouchable] = useState('kg');
    
    return(
        <SafeAreaView>
            <Container>
            <Main>
                <MainText>
                    <TextThanks adjustsFontSizeToFit={true}>
                        Pode me dizer uma coisa?
                    </TextThanks>
                    <Text adjustsFontSizeToFit={true}>
                        QUAL SEU PESO?
                    </Text>
                </MainText>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => setTouchable('kg')}><TextWeight>kg</TextWeight></TouchableOpacity>
                    <TouchableOpacity onPress={() => setTouchable('lb')}><TextWeight>lb</TextWeight></TouchableOpacity>
               </ButtonContainer>
            </Main>
            <SubMain>
                <TextHeight>{height}{touchable}</TextHeight>
                <Slider
                    style={{width: 300, height: 40, alignSelf: 'center'}}
                    value={height}
                    onValueChange={value => setHeight(value)}
                    step={1}
                    minimumValue={30}
                    maximumValue={200}
                    minimumTrackTintColor="#7e2fe2"
                    maximumTrackTintColor="#999"
                    thumbTintColor="#7e2fe2"
                />
            </SubMain>
            <TouchableOpacity onPress={() => {navigation.push('AgeScreen', {height: height, touchable: touchable})}}>
                <ButtonNext>
                    PRÓXIMO
                </ButtonNext>
            </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}