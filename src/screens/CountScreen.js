import React from "react";
import { View, Text } from "react-native";
import { useState } from "react";
import { Button } from "@rneui/themed";



const CountScreen=()=>{
    const[contador,setContador]=useState(0);
    const contaClickMas=()=>{
        setContador(contador+1);
    };
    const contaClickMenos=()=>{
        setContador(contador-1);
    };
    return(
        <View>
            <Button 
            title="Más" 
            onPress={contaClickMas}
            icon={{
                name: 'plus-box',
                type: "material-community",
                size: 40,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 100,
                marginVertical: 40,
              }}/>
              <Text
                style={{
                    textAlign:'center',
                    fontSize:30,
                }}
                >Usted ha presionado: {contador}</Text>
            <Button 
            title="Menos" 
            onPress={contaClickMenos}
            icon={{
                name: 'minus-box',
                type: "material-community",
                size: 40,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 100,
                marginVertical: 40,
              }}
              />
        </View>
    )
};

export default CountScreen;