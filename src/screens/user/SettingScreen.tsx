import { Button, StyleSheet, Text, View } from "react-native";
import { ScreenProps } from "../../navigations/user-tab-navigation";
const SettingScreen = ({setIsAdmin,setIsLogin}:ScreenProps)=>{
    const logoutAction = ()=>{
        setIsAdmin(false);
        setIsLogin(false);
    }
    return (
        <View style={styles.container}>
            <Text>Setting</Text>
            <Button
                onPress={logoutAction}
                title='Log out'
            />
        </View>
    ) 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        fontWeight:'bold'
    }
})
export default SettingScreen;