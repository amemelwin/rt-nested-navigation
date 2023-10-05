import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
//import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { GlobalProps } from '../../App';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
export type ScreenProps = NativeStackScreenProps<AuthStackParameterList> & GlobalProps;

export type AuthStackParameterList = {
     Login : undefined;
     Signup : undefined;
}
type AuthStackProps = {
    globalProps: GlobalProps
}
const AuthStackNavigator = ({globalProps}:AuthStackProps)=>{
    
    const  Stack= createNativeStackNavigator<AuthStackParameterList>();
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={(props:NativeStackScreenProps<AuthStackParameterList>)=><LoginScreen {...props} {...globalProps}/>}
            />
            <Stack.Screen
                name='Signup'
                component={(props:NativeStackScreenProps<AuthStackParameterList>)=><SignupScreen {...props} {...globalProps}/>}
            />

        </Stack.Navigator>
    </NavigationContainer>
}
export default AuthStackNavigator;