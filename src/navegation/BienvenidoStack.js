import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {screen} from "../utils/screenName";
import BienvenidoScreen from "../screens/BienvenidoScreen";
import CountScreen from "../screens/CountScreen";

const Stack=createNativeStackNavigator();
const BienvenidoStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.bienvenido.bienvenido}
            component={BienvenidoScreen}
            options={{title:"Bienvenido"}}
            />
            <Stack.Screen 
            name={screen.bienvenido.contador}
            component={CountScreen}
            options={{title:"Contador"}}
            />
        </Stack.Navigator>
    )
}
export default BienvenidoStack;