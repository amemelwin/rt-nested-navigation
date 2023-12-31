import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dispatch, SetStateAction, useState } from "react";
import Home from "./src/BottomTab/Home";
import Profile from "./src/BottomTab/Profile";
import AdminTabNavigator from "./src/Navigation/admin-tab-navigation";
import Detail from "./src/Stack/Detail";

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
export type GlobalProps= {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
}
const App =()=>{
  const [isLogin,setIsLogin] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  const globalProps : GlobalProps = {
    setIsLogin,
    setIsAdmin
  }
   return <AdminTabNavigator globalProps={globalProps}/>
   //!isLogin?
//   <AuthStackNavigator globalProps={globalProps}/>
//   //:
//  // isAdmin?
//     <AdminTabNavigator globalProps={globalProps}/>
//    // :
//     <UserTabNavigator globalProps={globalProps}/>
//   <NavigationContainer>
//   <TabNavigator/>
// </NavigationContainer>
}
export default App;
