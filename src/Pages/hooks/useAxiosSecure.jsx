import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


export const axiosSecure = axios.create({
    baseURL: 'https://assignment-12-server-side-psi.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { userSignOut } = useContext(AuthContext)

    // axiosSecure.interceptors.request.use(function (config) {
    //     const token = localStorage.getItem('access-token')
    //     // console.log('request stopped by interceptors', token)
    //     config.headers.authorization = `Bearer ${token}`;
    //     return config;
    // }, function(error) {
    //     return Promise.reject(error );
    // }
    // );

    // axiosSecure.interceptors.response.use(function (response) {
    //     return response;
    // }, async (error) => {
    //     const status = error.response.status;
    //     // console.log('status error in the interceptor', status)
    //     if(status === 401 || status===403){
    //         await userSignOut();
    //         navigate('/login');
    //     }
    //     return Promise.reject(error)
    // })

    return axiosSecure;
};

export default useAxiosSecure;