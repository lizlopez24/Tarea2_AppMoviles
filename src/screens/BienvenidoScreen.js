import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";
import {screen} from "../utils/screenName";

const BienvenidoScreen=(props)=>{
    const{navigation}=props;
    const goToCountScreen=()=>{
        navigation.navigate(screen.bienvenido.contador);
    };

    return(
        <View>
            <Text style={{textAlign:'center', fontSize: 25}}>Bienvenido a la app</Text>
            <Button 
            title="Accede al Contador" 
            onPress={goToCountScreen}
            icon={{
                name: 'counter',
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
}

export default BienvenidoScreen;