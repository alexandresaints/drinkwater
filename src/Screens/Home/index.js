import React from "react";
import {TouchableOpacity, StyleSheet} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import ButtonLets from "../../Components/NextButton";

import {
Text,
Strong,
Main,
SubMain,
SubText,
Container
} from './styles'

export default function Home({navigation}){
    return(
        <SafeAreaView>
            <Container>
            <Main>
                <Text adjustsFontSizeToFit={true}>
                    Olá, me chamo <Strong>Sofia</Strong>, e serei sua companheira no seu processo de hidratação
                </Text>
            </Main>
            <SubMain>
                <SubText adjustsFontSizeToFit={true}>
                    Para fornecer consultorias sobre sua hidratação, irei perguntar coisas básicas sobre você, mas não se preocupe, é segredo nosso.
                </SubText>
            </SubMain>
            <TouchableOpacity onPress={() => {navigation.push('LibsScreen')}}>
                <ButtonLets />
            </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    Button: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: '50%',
        backgroundColor: 'rgb(84, 162, 255)',
        padding: 10,
        paddingLeft: '30%',
        paddingRight: '30%',
        borderRadius: 500
    },
})