import axios from 'axios';



export const axiosPublic = axios.create({
    baseURL: 'https://assignment-12-server-side-psi.vercel.app'
})

const useAxiosPublic = () => {
    
    return axiosPublic;
};

export default useAxiosPublic;