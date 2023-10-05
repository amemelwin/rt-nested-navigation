import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../BottomTab/Home";
import Profile from "../BottomTab/Profile";
import Detail from "../Stack/Detail";
export type RootParamList = {
    Home: undefined;
    Profile:undefined;
    Detail: undefined;
    HomeScreen: undefined;
}
export type ScreenProps = NativeStackScreenProps<RootParamList>;

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator<RootParamList>();
const TabNavigator = ()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator}/>
      <Tab.Screen name="Profile" component={Profile}/>

    </Tab.Navigator>
  )
}
const StackNavigator = ()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
const RootNavigation = ()=>{
    return <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
}
export default RootNavigation();