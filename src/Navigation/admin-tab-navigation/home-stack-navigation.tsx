import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalProps } from "../../../App";
import HomeScreen from "../../screens/admin/HomeScreen";
export type HomeTabScreenProps = NativeStackScreenProps<HomeStackNavigatorList> & GlobalProps;
export type HomeStackNavigatorList = {
    home: undefined;
    detail: {
        name: String;
    }
}
type HomeStackProp = {
    globalProps : GlobalProps;
}
const HomeStackNavigation = ({globalProps}:HomeStackProp)=>{
    const Stack = createNativeStackNavigator<HomeStackNavigatorList>();
    const Tab = createBottomTabNavigator<HomeStackNavigatorList>();

    return <NavigationContainer>
        {/* <Tab.Navigator>
        <Tab.Screen 
                name = 'home'
                component={(props:NativeStackScreenProps<HomeStackNavigatorList>)=><HomeScreen {...props} {...globalProps} />}
        />
        </Tab.Navigator> */}
        <Stack.Navigator>
            <Stack.Screen 
                name = 'home'
                component={(props:NativeStackScreenProps<HomeStackNavigatorList>)=><HomeScreen {...props} {...globalProps} />}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
export default HomeStackNavigation;