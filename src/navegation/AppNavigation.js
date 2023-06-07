import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BienvenidoStack from "./BienvenidoStack";
import { Icon } from '@rneui/themed';
import { screen } from "../utils/screenName";

const Tab=createBottomTabNavigator();

export const AppNavigation=()=>{
    return(
        <Tab.Navigator screenOptions={({router})=>({
            headerShown:false,
            tabBarActiveTintColor: "#76D7C4",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({color,size})=>{
                return(
                    <Icon 
                    type="material-community" 
                    name="home-outline"
                    color={color} 
                    size={size}
                    />
                )
            }
        })}
        >
            <Tab.Screen
                name= {screen.bienvenido.tab} component={BienvenidoStack} options={{title:"Bienvenido"}}
            />
        </Tab.Navigator>
    )
}