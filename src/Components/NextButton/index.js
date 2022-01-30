import React from "react";
import {StyleSheet} from "react-native";
import {Button} from './styles'

export default function ButtonNext(){
    return(
                <Button style={style.Button}>
                    PRÓXIMO
                </Button>
    )
}
const style = StyleSheet.create({
    Button: {
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: '50%',
        backgroundColor: 'rgb(126, 47, 226)',
        padding: 10,
        paddingLeft: '30%',
        paddingRight: '30%',
        borderRadius: 500
    },
})