import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalProps } from "../../../App";
import HomeScreen from "../../screens/user/HomeScreen";
import InfoScreen from "../../screens/user/InfoScreen";
import SettingScreen from "../../screens/user/SettingScreen";
type UserTabProp ={
    globalProps: GlobalProps;
}
export type ScreenProps = NativeStackScreenProps<UserTabNavigatorList> & GlobalProps;
export type UserTabNavigatorList={
    Home : undefined;
    Info : undefined;
    Setting : undefined;
}
const UserTabNavigator = ({globalProps}:UserTabProp)=>{
    const Tab = createBottomTabNavigator<UserTabNavigatorList>();
    return (
        <NavigationContainer>
          <Tab.Navigator             
                    screenOptions={({ route }) => ({
                        tabBarLabel:route.name,
                        tabBarIcon: ({ focused, color, size }) => {
                        let iconName:string = '' ;
            
                        if (route.name === 'Info') {
                            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'; 
                        }
                        else if (route.name === 'Home') {
                            iconName = focused
                            ? 'home'
                            : 'home-outline';
                        }             else if (route.name === 'Setting') {
                            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                        }
            
                        // You can return any component that you like here!
                        return <Ionicons 
                            name={iconName}
                            size={focused?35:28} 
                            color={color} 
                        />;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    })}
                    >
        
            <Tab.Screen 
                name="Home" 
                component={(props:NativeStackScreenProps<UserTabNavigatorList>)=><HomeScreen {...props} {...globalProps}/>} 
            />
            <Tab.Screen name="Info" component={InfoScreen} />
            <Tab.Screen 
                name="Setting" 
                component={(props:NativeStackScreenProps<UserTabNavigatorList>)=><SettingScreen {...props} {...globalProps}/>}
            /> 
            </Tab.Navigator>
    </NavigationContainer>

    )
}
export default UserTabNavigator;