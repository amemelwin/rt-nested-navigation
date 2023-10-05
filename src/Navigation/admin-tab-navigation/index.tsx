import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalProps } from "../../../App";
import CategoryScreen from "../../screens/admin/CategoryScreen";
import HomeStackNavigation from "./home-stack-navigation";
export type ScreenProps = NativeStackScreenProps<AdminTabNavigatorList> & GlobalProps;
export type AdminTabNavigatorList={
    Home : undefined;
    Category: undefined;
}
export interface AdminTabProp {
    globalProps: GlobalProps
}
const AdminTabNavigator =({globalProps}:AdminTabProp)=>{
    const Tab = createBottomTabNavigator<AdminTabNavigatorList>(
    );
    return (
        <NavigationContainer>
               <Tab.Navigator             
                    screenOptions={({ route }) => ({
                        tabBarLabel:route.name,
                        tabBarIcon: ({ focused, color, size }) => {
                        let iconName:string = '' ;
            
                        if (route.name === 'Home') {
                            iconName = focused
                            ? 'home'
                            : 'home-outline';
                        } else if (route.name === 'Category') {
                            iconName = focused ? 'flower' : 'flower-outline';
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
                    component={(props:NativeStackScreenProps<AdminTabNavigatorList>)=><HomeStackNavigation globalProps={globalProps}
                    
                    />} 
                />
                <Tab.Screen name="Category" component={CategoryScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default AdminTabNavigator;