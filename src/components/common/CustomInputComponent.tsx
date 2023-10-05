import { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

type CustomInputType = {
    title: string;
    value: string;
    onChangeText : (text:string)=>void;
    style: Object;
    isPasswordField:boolean;
    keyboardType: KeyboardTypeOptions | undefined;
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined
}
const CustomInputComponent = ({title,value,onChangeText,style,isPasswordField,keyboardType,autoCapitalize}:CustomInputType)=>{
   const [showPassword,setShowPassword] = useState<boolean>(false);
   return <View>
            <Text>{title}</Text>
            <View style={styles.inputFieldBox}>
                <TextInput
                    style={style}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isPasswordField && !showPassword}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                />
                {isPasswordField && <Ionicons
                    onPress={()=>setShowPassword(!showPassword)}
                    name={showPassword?'eye': 'eye-off-outline'}
                    size={25}
                    style={styles.icon}
                />
                }
            </View>
    </View>
}
const styles = StyleSheet.create({
    inputFieldBox :{
        flexDirection:'row',
        alignItems:'center'
    },
    icon :{
        position:'absolute',
        right:30,
        marginTop:-7
    }
})
export default CustomInputComponent;