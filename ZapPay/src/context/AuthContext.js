import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [splashLoading, setSplashLoading] = useState(false);

    const login = (email, password) => {
        setIsLoading(true)

        axios.post(`${BASE_URL}apiCliente/v1/users`, {
            email,
            password,
        })
            .then(res => {
                let userInfo = res.data
                console.log(userInfo)
                setIsLoading(false)
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            })
            .catch(e => {
                console.log(`login Errro ${e}`)
                setIsLoading(false)
            });
    }
    const logout = () => {
        setIsLoading(true);

        axios
            .post(
                `${BASE_URL}/logout`,
                {},
                {
                    headers: { Authorization: `Bearer ${userInfo.access_token}` },
                },
            )
            .then(res => {
                console.log(res.data);
                AsyncStorage.removeItem('userInfo');
                setUserInfo({});
                setIsLoading(false);
            })
            .catch(e => {
                console.log(`logout error ${e}`);
                setIsLoading(false);
            });
    };

    const isLoggedIn = async () => {
        try {
            setSplashLoading(true);

            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserInfo(userInfo);
            }

            setSplashLoading(false);
        } catch (e) {
            setSplashLoading(false);
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};