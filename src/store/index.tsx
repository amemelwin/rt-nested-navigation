import AsyncStorage from '@react-native-async-storage/async-storage';
const Store = {
    setAuthKey : async (value:any) => {
        try {
          await AsyncStorage.setItem('my-key', 'admin');
        } catch (e) {
          // saving error
        }
      },
    getAuthKey : async () => {
        try {
          const value = await AsyncStorage.getItem('my-key');
          if (value !== null) {
            // value previously stored
            return value;
          }
        } catch (e) {
          // error reading value
        }
      }
}
export default Store;