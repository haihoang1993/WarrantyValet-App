import { AsyncStorage } from 'react-native';
const StorageKey = {
    IS_LOGIN: 'isLogin',
    USER_LOGIN: 'user_login',
}
const StorageDB = {
    isLogin: async () => {
        try {
            const value = await AsyncStorage.getItem(StorageKey.IS_LOGIN);
            if (value !== null) {
                // We have data!!
                console.log('getStroge:', (value == '1'));
                return (value == '1');
            } else {
                return false;
            }
        } catch (error) {
            // Error retrieving data
            return false
        }
    },
    setIsLogin: async (isLogin = false) => {
        try {
            const value = (isLogin) ? '1' : '-1';
            console.log("set value login:", value);
            await AsyncStorage.setItem(StorageKey.IS_LOGIN, value);
            return 1;
        } catch (e) {
            return -1
        }
    },
    setUserLogin: async (user = null) => {
        try {
            // const value = (isLogin) ? 1 : -1
            console.log("set value login:", user)
            if (user == null) {
                await AsyncStorage.setItem(StorageKey.USER_LOGIN, '');
            } else {
                await AsyncStorage.setItem(StorageKey.USER_LOGIN, JSON.stringify(user));
            }
            return 1;
        } catch (e) {
            return -1
        }
    },
    getUserLogin: async () => {
        try {
            const value = await AsyncStorage.getItem(StorageKey.USER_LOGIN);
            if (value !== null) {
                const user = JSON.parse(value);
                return user;
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
};

export default StorageDB