import { StyleSheet, Text, View } from "react-native";
import { ScreenProps } from "../../navigations/user-tab-navigation";
const HomeScreen = ({}:ScreenProps)=>{
    return (
        <View style={styles.container}>
            <Text>Home</Text>
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
export default HomeScreen;