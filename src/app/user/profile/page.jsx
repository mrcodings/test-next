"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = () => {
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    const router = useRouter();

    useEffect(() => {
        if(localStorage.getItem("accessToken")){
            setToken(localStorage.getItem("accessToken"));
        }else{
            router.push("/auth/sign");
        }
    }, []);

    useEffect(() => {
        if (token) {
            parsingProfile();
        }
    }, [token]);

    const parsingProfile = () => {
        axios.request({
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:4000/api/v1/me',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                if(error.response.status == 401){
                    localStorage.removeItem("accessToken");
                    router.push("/auth/sign");
                }
                console.log(error);
            });
    }

    return (
        <>
            Nama: {user?.name}
        </>
    )
}

export default UserProfile;