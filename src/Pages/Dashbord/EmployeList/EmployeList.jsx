import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { ImCross } from "react-icons/im";
import Swal from 'sweetalert2';
import { MdVerified } from "react-icons/md";

const EmployeList = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users/HR');
            return res.data;
        }
    })
    console.log(users)

    const handleVerify = (user) => {
        axiosSecure.patch(`users/HR/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0)
                    refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is verified Now!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div>
            <p>Hello Employee</p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Verified</th>
                                <th>Bank Account</th>
                                <th>Salary</th>
                                <th>Pay</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users?.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                           user?.isVerified === true ? <button className='btn btn-sm btn-outline'><MdVerified size={16} color='green'/></button> : <button className='btn btn-outline btn-sm' onClick={()=>handleVerify(user)}><ImCross color='red'/></button>
                                        }
                                    </td>
                                    <td>{user.bankAccount}</td>
                                    <td>{user.salary}</td>
                                    <td><button className={`btn  btn-sm ${user?.isVerified=== true ? 'btn-primary':"btn-disabled"}`}>Pay</button></td>
                                    <td>Details</td>
                                    
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeList;